"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useTheme } from "@mui/material";

const Background: FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  return (
    <main>
      <div
        style={{
          width: "100%",
          height: "40vh",
          backgroundColor: theme.palette.primary.main,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          position: "absolute",
        }}
      >
        <Image
          src={"/icons/Day.png"}
          alt={"day-insurance-logo"}
          width={150}
          height={150}
          style={{
            position: "relative",
            top: "0",
            right: "50%",
            transform: "translateX(50%)",
          }}
        />
        {children}
      </div>
    </main>
  );
};

export default Background;
