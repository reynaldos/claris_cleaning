"use client";

import { ThemeProvider } from "styled-components";
import { globalTheme } from "../constants/theme";


export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={globalTheme}>
    {children}
    
    </ThemeProvider>;
}
