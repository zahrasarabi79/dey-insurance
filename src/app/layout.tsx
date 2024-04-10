"use client";
import "./globals.css";
import MuiTheme from "@/theme/MuiTheme";
import Background from "@/components/Background";
import { Provider } from "react-redux";
import store from "@/state-managment/store/store";

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
            <Background>{children}</Background>
          </MuiTheme>
        </Provider>
      </body>
    </html>
  );
}
