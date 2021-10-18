import "./App.css";
import Date from "./components/Date";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <Date /> */}
      {/* <ToDoItem /> */}
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
