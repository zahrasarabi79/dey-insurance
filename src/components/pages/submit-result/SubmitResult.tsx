import React, { useRef } from "react";
import { Box, Button, Slide, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAccessTokenQuery } from "@/api-managment/api/insuranceAgentApi";
import Cookies from "js-cookie";

const SubmitResult = () => {
  const { data: accessToken } = useAccessTokenQuery();
  const containerRef = useRef();
  const theme = useTheme();
  const router = useRouter();
  const handleOnClick = () => {
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Box
        sx={{
          height: "20vh",
          overflow: "hidden",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
        ref={containerRef}
      >
        <Slide direction="up" in={true} container={containerRef.current}>
          <Stack
            direction={"column"}
            rowGap={3}
            sx={{
              bgcolor: theme.palette.background.default,
              width: "100%",
              height: "20vh",
              p: 6,
              justifyContent: "center",
            }}
          >
            <Stack>
              <Typography>نماینده محترم :</Typography>
              <Typography>
                درخواست ثبت نام شما در حال بررسی است؛ در صورت تایید
                اطلاعات،اپلیکیشن مورد نظر فعال خواهد شد.
              </Typography>
            </Stack>
            <Button
              variant={"contained"}
              sx={{ m: "auto" }}
              onClick={handleOnClick}
            >
              ورود با حساب کاربری دیگر
            </Button>
          </Stack>
        </Slide>
      </Box>
    </div>
  );
};

export default SubmitResult;
