import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useTheme } from "@mui/material";

interface prop {
  initialMounth: string;
  initialDay: string;
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
  event: string;
  clickTheme: boolean;
}

const Timer: React.FC<prop> = ({
  initialDay,
  initialMounth,
  initialHours,
  initialMinutes,
  initialSeconds,
  event,
  clickTheme,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const theme = useTheme();

  const startDate = new Date();
  let current = new Date().getFullYear();

  let year: number = current;

  if (Number(initialMounth) === 13 && Number(initialDay) === 32) {
    year++;
  }

  const endDate = new Date(
    year,
    Number(initialMounth) - 1,
    Number(initialDay),
    initialHours,
    initialMinutes,
    initialSeconds
  );

  const timeDifference = endDate.getTime() - startDate.getTime();

  const totalSeconds = Math.floor(timeDifference / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));

  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          clearInterval(timerId);
        }
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [hours, minutes, seconds]);

  const styleTheme =
    clickTheme === true
      ? { color: theme.palette.primary.contrastText }
      : { color: theme.palette.secondary.contrastText };

  return (
    <div className={style.main}>
      <p style={styleTheme}>{event ? `Contdown to ${event}` : ""}</p>
      <div className={style.main_time}>
        <div className={style.main_time__h1}>
          <h2 style={styleTheme}>{days}</h2>
          <p style={styleTheme}>{days > 1 ? "days" : "day"}</p>
        </div>
        <div className={style.main_time__h1}>
          <h2 style={styleTheme}>{hours} </h2>
          <p style={styleTheme}>{hours > 1 ? "hours" : "hour"}</p>
        </div>
        <div className={style.main_time__h1}>
          <h2 style={styleTheme}> {minutes}</h2>
          <p style={styleTheme}>{minutes > 1 ? "minutes" : "minute"}</p>
        </div>
        <div className={style.main_time__h1}>
          <h2 style={styleTheme}>{seconds}</h2>
          <p style={styleTheme}>{seconds > 1 ? " seconds" : "second"}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
