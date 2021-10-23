import { Fragment } from "react/cjs/react.production.min";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <Fragment>
      {props.items.map((todo) => (
        <ToDoItem
          todoDate={todo.date}
          todoActivity={todo.activity}
          todoTimeStart={todo.timeStart}
          todoTimeEnd={todo.timeEnd}
        />
      ))}
      <ToDoItem
        todoDate={new Date(2021, 6, 12)}
        todoActivity="Belajar React"
        todoTimeStart="10.00"
        todoTimeEnd="11.00"
      />
      <ToDoItem
        todoDate={new Date(2021, 8, 22)}
        todoActivity="Main futsal"
        todoTimeStart="18.00"
        todoTimeEnd="20.00"
      />
    </Fragment>
  );
};

export default ToDoList;
