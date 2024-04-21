import React, { useState } from "react";
import styles from "./task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type Props = {
  nametask: string;
  desctask: string;
};


export const Task: React.FC<Props> = ({ nametask, desctask }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.name}>{nametask}</h2>
        <button className={styles.check}>
          <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
        </button>
      </div>
      <p className={styles.desc}>{desctask}</p>
    </div>
  );
};
