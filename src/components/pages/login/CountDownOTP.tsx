import React, { useEffect, useState } from "react";

const CountDownOTP = () => {
  const [second, setSecond] = useState<number>(59);
  const [minutes, setMinutes] = useState<number>(1);

  useEffect(() => {
    const timerSec =
      second > 0 && setInterval(() => setSecond(second - 1), 1000);

    return () => {
      timerSec && clearInterval(timerSec);
    };
  }, [second]);

  useEffect(() => {
    const timerMin =
      minutes > 0 && setInterval(() => setMinutes(minutes - 1), 60000); // Change interval to 60 seconds (60000 milliseconds)
    return () => {
      timerMin && clearInterval(timerMin);
    };
  }, [minutes]);

  // Function to format time to always display two digits
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div>
      ارسال مجدد کد {formatTime(minutes)}:{formatTime(second)}
    </div>
  );
};

export default CountDownOTP;
