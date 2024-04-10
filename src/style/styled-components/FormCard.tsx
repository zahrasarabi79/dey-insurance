"use client";
import { Card, styled } from "@mui/material";

export const CustomCard = styled(Card)(({ theme }) => ({
  width: "80vw",
  height: "auto",
  padding: 16,
  borderRadius: 16,
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0px 0px 8px gray",
  [theme.breakpoints.up("sm")]: {
    width: "60vw",
    height: "auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "40vw",
    height: "auto",
  },
}));
