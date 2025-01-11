import styles from "../style/home.module.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function Home() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthText, setMonthText] = useState();
  const [date, setDate] = useState(new Date(year, month, 1));
  const [numberOfDays, setNumberOfDays] = useState(
    new Date(year, month + 1, 0).getDate()
  );
  useEffect(() => {
    switch (month) {
      case 0:
        setMonthText("January");
        break;
      case 1:
        setMonthText("February");
        break;
      case 2:
        setMonthText("March");
        break;
      case 3:
        setMonthText("April");
        break;
      case 4:
        setMonthText("May");
        break;
      case 5:
        setMonthText("June");
        break;
      case 6:
        setMonthText("July");
        break;
      case 7:
        setMonthText("August");
        break;
      case 8:
        setMonthText("September");
        break;
      case 9:
        setMonthText("October");
        break;
      case 10:
        setMonthText("November");
        break;
      case 11:
        setMonthText("December");
        break;
      default:
        console.log("invalid month");
    }
  }, [month]);
  const changeMonth = (ch) => {
    if (ch == "+") {
      if (month < 11) {
        setMonth((i) => i + 1);
      } else {
        setMonth(0);
      }
    } else {
      if (month > 0) {
        setMonth((i) => i - 1);
      } else {
        setMonth(11);
      }
    }
  };
  const changeYear = (ch) => {
    if (ch == "+") {
      setYear((i) => i + 1);
    } else {
      setYear((i) => i - 1);
    }
  };
  useEffect(() => {
    setDate(new Date(year, month, 1));
    setNumberOfDays(new Date(year, month + 1, 0).getDate());
  }, [month, year]);
  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Calendar</h1>
      <div className={styles.dateSelector}>
        <div>
          <Button
            variant=""
            style={{
              backgroundColor: "rgb(60, 59, 59)",
              color: "white",
              fontSize: "40px",
            }}
            onClick={() => changeMonth("-")}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Button>
          <span className={styles.dateText}>{monthText}</span>
          <Button
            variant=""
            style={{
              backgroundColor: "rgb(60, 59, 59)",
              color: "white",
              fontSize: "40px",
            }}
            onClick={() => changeMonth("+")}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Button>
        </div>
        <div>
          <Button
            variant=""
            style={{
              backgroundColor: "rgb(60, 59, 59)",
              color: "white",
              fontSize: "40px",
            }}
            onClick={() => changeYear("-")}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Button>
          <span className={styles.dateText}>{year}</span>
          <Button
            variant=""
            style={{
              backgroundColor: "rgb(60, 59, 59)",
              color: "white",
              fontSize: "40px",
            }}
            onClick={() => changeYear("+")}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Button>
        </div>
      </div>
      <div className={styles.calendarBody}>
        <div className={styles.calendarHead}>Sunday</div>
        <div className={styles.calendarHead}>Monday</div>
        <div className={styles.calendarHead}>Tuesday</div>
        <div className={styles.calendarHead}>Wednesday</div>
        <div className={styles.calendarHead}>Thursday</div>
        <div className={styles.calendarHead}>Friday</div>
        <div className={styles.calendarHead}>Saturday</div>
        {Array.from({ length: date.getDay() }).map((_, i) => (
          <div key={i} className={styles.calendarDay}></div>
        ))}
        {Array.from({ length: numberOfDays }).map((_, i) => (
          <div key={i} className={styles.calendarDay}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
