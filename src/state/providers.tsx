"use client";

import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import { globalTheme } from "../constants/theme";

import "@/styles/global.css"
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return  (
     <StyledComponentsRegistry>
       <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>
     </StyledComponentsRegistry>
    );
}
