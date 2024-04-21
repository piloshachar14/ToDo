import { AddButton } from "./components/add-button/add-button";
import { Category } from "./components/category/category";
import styles from "./app.module.css";
import React, { useState } from "react";

function App() {
  const [ToDo, setToDo] = useState([]);
  const [Done, setDone] = useState([]);

  return (
    <div className={styles.container}>
      <Category title="To-Do" />
      <Category title="Done" />
      <AddButton />
    </div>
  );
}

export default App;
