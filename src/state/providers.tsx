"use client";

import styled, { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import { globalTheme, highContrastTheme } from "../constants/theme";
import { useEffect, useState } from "react";
import { FaUniversalAccess } from "react-icons/fa6";

import emailjs from "@emailjs/browser";

import LogRocket from "logrocket";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    LogRocket.init("rey-dev-services/claris-cleaning");

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

    // saved choice wins, otherwise follow the OS contrast preference
    const param = new URLSearchParams(location.search).get("contrast");
    const saved = localStorage.getItem("a11y-contrast");
    setHighContrast(
      param
        ? param === "high"
        : saved
        ? saved === "on"
        : matchMedia("(prefers-contrast: more)").matches
    );
  }, []);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-contrast", highContrast);
  }, [highContrast]);

  const toggleContrast = () => {
    localStorage.setItem("a11y-contrast", highContrast ? "off" : "on");
    setHighContrast(!highContrast);
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={highContrast ? highContrastTheme : globalTheme}>
        {children}
        <ContrastToggle
          type="button"
          aria-pressed={highContrast}
          aria-label="High contrast colors"
          title="High contrast colors"
          onClick={toggleContrast}
        >
          <FaUniversalAccess size={28} aria-hidden="true" />
        </ContrastToggle>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const ContrastToggle = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 30;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 2px solid #ffffff;
  background: #026f9d;
  color: #ffffff;
  cursor: pointer;
  display: grid;
  place-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);

  &[aria-pressed="true"] {
    background: #3f6800;
  }

  /* clear the mobile bottom nav */
  @media screen and (max-width: ${({ theme }) => theme.bpts.xs}) {
    bottom: 90px;
  }
`;
