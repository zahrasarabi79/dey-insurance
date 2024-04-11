import React, { useEffect, useState } from "react";
import { Link, Stack, Typography, useTheme } from "@mui/material";

const CountDownOTP = () => {
  const theme = useTheme();
  const [seconds, setSeconds] = useState<number>(59);
  const [minutes, setMinutes] = useState<number>(1);
  const isLinkActive = minutes === 0 && seconds === 0;
  const resetOTP = () => {
    setSeconds(59);
    setMinutes(1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval);
      } else if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  // Function to format time to always display two digits
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <Stack
      columnGap={1}
      direction={"row"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Link
        underline={"none"}
        onClick={resetOTP}
        sx={{
          cursor: "pointer",
          color: isLinkActive
            ? theme.palette.primary.main
            : theme.palette.text.disabled,
          pointerEvents: isLinkActive ? "auto" : "none",
        }}
      >
        ارسال مجدد کد
      </Link>
      <Typography sx={{ color: theme.palette.text.disabled }}>
        {formatTime(minutes)}:{formatTime(seconds)}
      </Typography>
    </Stack>
  );
};

export default CountDownOTP;
