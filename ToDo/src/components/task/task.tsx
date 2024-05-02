import React, { useState } from "react";
import styles from "./task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TaskData } from "../../App";

type Props = {
  taskData: TaskData;
  setState: React.Dispatch<React.SetStateAction<TaskData[]>>;
  setOpposite: React.Dispatch<React.SetStateAction<TaskData[]>>;
};
export const Task: React.FC<Props> = ({ taskData, setState, setOpposite }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.name}>{taskData.name}</h2>
        <p className={styles.desc}>{taskData.description}</p>
      </div>  
        <button className={styles.check}>
          <CheckCircleOutlineIcon
            onClick={() => {
              setState((prev) =>
                prev.filter((task) => task.id !== taskData.id)
              );
              setOpposite((prev) => [...prev, taskData]);
            }}
          />
        </button>
      </div>
   
  );
};
