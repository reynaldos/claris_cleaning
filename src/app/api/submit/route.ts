import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// Prisma needs the Node.js runtime; also force per-request execution.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FORM_TYPES = ["CONTACT", "QUOTE"] as const;
const STATUSES = ["SUCCESS", "ERROR"] as const;

type FormType = (typeof FORM_TYPES)[number];
type Status = (typeof STATUSES)[number];

function getIp(req: NextRequest): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

/**
 * Logs a contact/quote form submission to the database. Called by the forms
 * after they attempt the EmailJS send, so both successes and failures are
 * recorded. This must never surface an error to the user — the email itself
 * still goes through EmailJS regardless of whether logging succeeds.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, status, data, errorMessage } = body ?? {};

    if (!FORM_TYPES.includes(formType) || !STATUSES.includes(status)) {
      return NextResponse.json(
        { ok: false, error: "invalid payload" },
        { status: 400 }
      );
    }

    const safeData =
      data && typeof data === "object" && !Array.isArray(data) ? data : {};
    const email =
      typeof safeData.email === "string" && safeData.email.length
        ? safeData.email
        : null;

    await prisma.submission.create({
      data: {
        formType: formType as FormType,
        status: status as Status,
        email,
        data: safeData as Prisma.InputJsonValue,
        errorMessage:
          typeof errorMessage === "string" && errorMessage.length
            ? errorMessage
            : null,
        ipAddress: getIp(req),
        userAgent: req.headers.get("user-agent"),
        source: "live",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log server-side for observability, but don't block the user.
    console.error("[/api/submit] failed to log submission:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
