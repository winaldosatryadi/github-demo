import { Date as DateItem } from "./Date";
import Card from "./UI/Card";
import "./ToDoItem.css";

const ToDoItem = () => {
  const todoDate = new Date(2021, 6, 12);
  const todoActivity = "Belajar React";
  const todoTime = "10.00-11.00";

  return (
    <Card className="todo-item">
      <DateItem
        tanggal={todoDate.getDate()}
        bulan={todoDate.toLocaleString("default", { month: "long" })}
        tahun={todoDate.getFullYear()}
      />
      <div className="todo-item__description">
        <h2>{todoActivity}</h2>
        <div className="todo-item__time">{todoTime}</div>
      </div>
    </Card>
  );
};

export default ToDoItem;
