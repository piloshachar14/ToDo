import React, { PropsWithChildren, CSSProperties } from "react";
import styles from "./category.module.css";
type Props = {
  title: string;
  style?: CSSProperties;
} & PropsWithChildren;

export const Category: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.category} style={props.style}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
