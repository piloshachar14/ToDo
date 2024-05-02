import React from "react";
import styles from "./add-button.module.css";
import { AddTaskDialog } from "../add-task/add-task";
import { TaskData } from "../../App";

type Props = {
  setTodo: React.Dispatch<React.SetStateAction<TaskData[]>>;
};
export const AddButton: React.FC<Props> = ({ setTodo }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    return setOpen(true);
  };
  const handleSubmit = (taskData: TaskData) => {
    setTodo((todo) => [...todo, taskData]);
    setOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={() => handleClickOpen()} className={styles.btn}>
          +
        </button>
      </div>
      <div>
        <AddTaskDialog open={open} setOpen={setOpen} onSubmit={handleSubmit} />
      </div>
    </>
  );
};
