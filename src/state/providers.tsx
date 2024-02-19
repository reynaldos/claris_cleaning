"use client";

import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import { globalTheme } from "../constants/theme";

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
