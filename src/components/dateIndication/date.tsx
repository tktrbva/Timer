import style from "./style.module.scss";
import Timer from "../mainTimer/timer";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import iconBlack from "../img/free-icon-day-and-night-8996080.png";
import iconWhite from "../img/day-and-night (1).png";
import rainbow from "../img/free-icon-rainbow-363465.png";

const Date = () => {
  const [day, setDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [event, setEvent] = useState("");
  const [clickTheme, setClickTheme] = useState(false);

  const [submittedDay, setSubmittedDay] = useState("");
  const [submittedMonth, setSubmittedMonth] = useState("");
  const [submittedEvent, setSubmittedEvent] = useState("");
  const [isHover, setIsHover] = useState(false);

  const theme = useTheme();

  const date = new window.Date();
  let hour: number = date.getHours();
  let minutes: number = date.getMinutes();
  let seconds: number = date.getSeconds();

  const Click = () => {
    setClickTheme(!clickTheme);
  };

  const months = [
    { value: "1", name: "January" },
    { value: "2", name: "February" },
    { value: "3", name: "March" },
    { value: "4", name: "April" },
    { value: "5", name: "May" },
    { value: "6", name: "June" },
    { value: "7", name: "July" },
    { value: "8", name: "August" },
    { value: "9", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];

  const inputDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
  };

  const inputMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };
  const inputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(event.target.value);
  };
  const handleButton = () => {
    setSubmittedDay(day);
    setSubmittedMonth(selectedMonth);
    setSubmittedEvent(event);
  };

  return (
    <>
      <section
        style={
          clickTheme === true
            ? { backgroundColor: theme.palette.primary.main }
            : { backgroundColor: theme.palette.secondary.main }
        }
        className={style.main}
      >
        <img className={style.rainbow} src={rainbow} alt="rainbow" />
        <div
          className={style.hover}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {clickTheme === true ? (
            <img
              className={style.theme}
              onClick={Click}
              src={iconBlack}
              alt="icon"
            />
          ) : (
            <img
              className={style.theme}
              onClick={Click}
              src={iconWhite}
              alt="icon"
            />
          )}
          <p
            style={
              clickTheme === true
                ? { color: theme.palette.primary.contrastText }
                : { color: theme.palette.secondary.contrastText }
            }
            className={`${style.hoverText} ${
              isHover === true ? style.visible : style.hidden
            }`}
          >
            Change theme
          </p>
        </div>
        <h1
          style={
            clickTheme === true
              ? { color: theme.palette.primary.contrastText }
              : { color: theme.palette.secondary.contrastText }
          }
        >
          Timer site
        </h1>
        <div className={style.inputs}>
          <input
            value={day}
            onChange={inputDay}
            type="text"
            placeholder="Enter the day"
          />
          <select
            className={`${style.inputs_select} ${
              selectedMonth ? style.active : ""
            }`}
            value={selectedMonth}
            onChange={inputMonth}
          >
            <option className={style.inputs_option}>
              {selectedMonth
                ? months.find((m) => m.value === selectedMonth)?.name ||
                  "Enter month"
                : "Enter month"}
            </option>
            {months.map((month) => (
              <option
                className={style.inputs_option}
                key={month.value}
                value={month.value}
              >
                {month.name}
              </option>
            ))}
          </select>
          <input
            value={event}
            onChange={inputEvent}
            type="text"
            placeholder="Enter event"
          />
          <button onClick={handleButton}>Save</button>
        </div>
        <Timer
          initialMounth={submittedMonth}
          initialDay={submittedDay}
          initialHours={hour}
          initialMinutes={minutes}
          initialSeconds={seconds}
          event={submittedEvent || ""}
          clickTheme={clickTheme}
        />
      </section>
    </>
  );
};

export default Date;
