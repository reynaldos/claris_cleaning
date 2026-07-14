export type SubmissionFormType = "CONTACT" | "QUOTE";
export type SubmissionStatus = "SUCCESS" | "ERROR";

/**
 * Fire-and-forget logging of a form submission to /api/submit.
 * Failures are swallowed on purpose — logging must never affect the user's
 * experience or interfere with the EmailJS send.
 */
export async function logSubmission(input: {
  formType: SubmissionFormType;
  status: SubmissionStatus;
  data: Record<string, unknown>;
  errorMessage?: string;
}): Promise<void> {
  try {
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
      // Ensure the request still completes if the page navigates/unmounts.
      keepalive: true,
    });
  } catch (err) {
    console.error("Failed to log submission", err);
  }
}
