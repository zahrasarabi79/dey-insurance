"use client";
import "../globals.css";
import BackgroundSubmit from "@/components/pages/background/BackgroundSubmit";
import React from "react";
import store from "@/state-managment/store/store";
import { Provider } from "react-redux";
import MuiTheme from "@/theme/MuiTheme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir={"rtl"}>
      <body>
        <Provider store={store}>
          <MuiTheme>
            <BackgroundSubmit>{children}</BackgroundSubmit>
          </MuiTheme>
        </Provider>
      </body>
    </html>
  );
}
