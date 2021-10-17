import Date from "./Date";
import Card from "./UI/Card";
import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <Card className="todo-item">
      <Date />
      <div className="todo-item__description">
        <h2>Belajar React</h2>
        <div className="todo-item__time">10.00-11.00</div>
      </div>
    </Card>
  );
};

export default ToDoItem;
