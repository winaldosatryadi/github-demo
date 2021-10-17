import { Fragment } from "react/cjs/react.production.min";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <Fragment>
      <ToDoItem
        todoDate={new Date(2021, 6, 12)}
        todoActivity="Belajar React"
        todoTime="10.00-11.00"
      />
      <ToDoItem
        todoDate={new Date(2021, 8, 22)}
        todoActivity="Main futsal"
        todoTime="18.00-20.00"
      />
    </Fragment>
  );
};

export default ToDoList;
