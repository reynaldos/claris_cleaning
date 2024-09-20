"use client";

import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import { globalTheme } from "../constants/theme";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";

import LogRocket from "logrocket";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    LogRocket.init("yeuyxw/claris-cleaning");

    emailjs.init({
      publicKey: publicKey,
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
