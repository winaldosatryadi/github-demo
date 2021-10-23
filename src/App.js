import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

const todoList = [
  {
    date: new Date(2021, 6, 12),
    activity: "Belajar React",
    timeStart: "10.00",
    timeEnd: "11.00",
  },
];

function App() {
  const [todo, setTodo] = useState(todoList);

  const addToDoHandler = (newTodo) => {
    setTodo((todo) => {
      return [newTodo, ...todo];
    });
  };
  //konsep perubahan dari state sebelumnya

  return (
    <div className="App">
      {/* <Date /> */}
      {/* <ToDoItem /> */}
      <ToDoForm onAddToDo={addToDoHandler} />
      <ToDoList items={todo} />
    </div>
  );
}

export default App;
