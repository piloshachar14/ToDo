import React from "react";
import styles from "./add-button.module.css";
import { AddTaskDialog } from "../add-task/add-task";

export const AddButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    return setOpen(true);
  };
  return (
    <>
      <div>
        <button onClick={() => handleClickOpen()} className={styles.btn}>
          +
        </button>
      </div>
      <div>
        <AddTaskDialog open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
