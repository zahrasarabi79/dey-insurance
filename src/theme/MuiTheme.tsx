"use client";
import React, { FC } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import typography from "@/theme/typography";
import { palette } from "@/theme/palette";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const MuiTheme: FC<{ children: React.ReactNode }> = ({ children }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const theme: ThemeOptions = createTheme({
    direction: "rtl",
    typography,
    palette,
  });
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MuiTheme;
