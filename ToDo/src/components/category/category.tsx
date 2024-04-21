import React from "react";
import styles from "./category.module.css";
import { Task } from "../task/task";

type Props = {
  title: string;
};

export const Category: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.category}>
      <h1 className={styles.title}>{title}</h1>
      <Task nametask="nice" desctask="nice"></Task>
    </div>
  );
};
