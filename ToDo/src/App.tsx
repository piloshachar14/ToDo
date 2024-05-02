import { AddButton } from "./components/add-button/add-button";
import { Category } from "./components/category/category";
import styles from "./app.module.css";
import { useState } from "react";
import { Task } from "./components/task/task";
import { CSSProperties } from "react";

export type TaskData = {
  id: string;
  name: string;
  description: string;
};

function App() {
  const [todo, setTodo] = useState<TaskData[]>([]);
  const [donetasks, setDoneTasks] = useState<TaskData[]>([]);
  const styletodo: CSSProperties = {
    marginRight: "1rem",
  };

  return (
    <div className={styles.container}>
      <Category title="To-Do" style={styletodo}>
        {todo.map((task) => (
          <Task
            key={task.id}
            taskData={task}
            setState={setTodo}
            setOpposite={setDoneTasks}
          />
        ))}
      </Category>
      <Category title="Done">
        {donetasks.map((task) => (
          <Task
            key={task.id}
            taskData={task}
            setState={setDoneTasks}
            setOpposite={setTodo}
          />
        ))}
      </Category>
      <AddButton setTodo={setTodo}></AddButton>
    </div>
  );
}
export default App;
