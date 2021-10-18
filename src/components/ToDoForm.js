import { useState } from "react";
import "./ToDoForm.css";
import Card from "./UI/Card";

const ToDoForm = () => {
  const [enteredActivity, setEnteredActivity] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTimeStart, setEnteredTimeStart] = useState("");
  const [enteredTimeEnd, setEnteredTimeEnd] = useState("");

  const activityHandler = (event) => {
    console.log(event.target.value);
    setEnteredActivity(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const timeStartHandler = (event) => {
    setEnteredTimeStart(event.target.value);
  };
  const timeEndHandler = (event) => {
    setEnteredTimeEnd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      activity: enteredActivity,
      date: new Date(enteredDate),
      timeStart: enteredTimeStart,
      timeEnd: enteredTimeEnd,
    };

    console.log(todoData);
    setEnteredActivity("");
    setEnteredTimeStart("");
    setEnteredTimeEnd("");
    setEnteredDate("");
  };

  return (
    <Card className="form__card">
      <form className="form__controls" onSubmit={submitHandler}>
        <div className="form__date-time">
          <div className="form__control">
            <label>Date</label>
            <input
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              max="2023-12-31"
              onChange={dateHandler}
              value={enteredDate}
            />
          </div>

          <div className="form__control">
            <label>From</label>
            <input
              type="time"
              onChange={timeStartHandler}
              value={enteredTimeStart}
            />
          </div>

          <div className="form__control">
            <label>To</label>
            <input
              type="time"
              onChange={timeEndHandler}
              value={enteredTimeEnd}
            />
          </div>
        </div>

        <div className="form__control">
          <label>Activity</label>
          <input
            type="text"
            onChange={activityHandler}
            value={enteredActivity}
          />
        </div>
        <div>
          <button className="form__btn" type="submit">
            Add To Do Item
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ToDoForm;
