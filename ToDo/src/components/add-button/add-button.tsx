import React from "react";
import styles from "./add-button.module.css";
import { AddTaskDialog } from "../add-task/add-task";
type TaskData = {
  name: string;
  description: string;
};
type Props = {
  setNewTask: React.Dispatch<React.SetStateAction<TaskData>>;
};
export const AddButton: React.FC<Props> = ({ setNewTask }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    return setOpen(true);
  };
  const handleTaskSubmit = (taskData: TaskData) => {
    setNewTask(taskData);
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
        <AddTaskDialog
          open={open}
          setOpen={setOpen}
          onSubmit={handleTaskSubmit}
        />
      </div>
    </>
  );
};
