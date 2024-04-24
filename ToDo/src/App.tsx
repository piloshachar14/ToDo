import { AddButton } from "./components/add-button/add-button";
import { Category } from "./components/category/category";
import styles from "./app.module.css";
import { useState } from "react";
type TaskData = {
  name: string;
  description: string;
};
function App() {
  const [ToDo, setToDo] = useState([{}]);
  const [Done, setDone] = useState([]);
  const [newTask, setNewTask] = useState<TaskData>({
    name: "",
    description: "",
  });
  ToDo.push(newTask);//need to see how to use setToDo
  console.log(ToDo);

  return (
    <div className={styles.container}>
      <Category title="To-Do" />
      <Category title="Done" />
      <AddButton setNewTask={setNewTask}></AddButton>
    </div>
  );
}

export default App;
