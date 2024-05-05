import styles from "./task.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TaskData } from "../../App";
import RestoreIcon from "@mui/icons-material/Restore";

type Props = {
  taskData: TaskData;
  setState: React.Dispatch<React.SetStateAction<TaskData[]>>;
  setOpposite: React.Dispatch<React.SetStateAction<TaskData[]>>;
};
export const Task: React.FC<Props> = ({ taskData, setState, setOpposite }) => {
  const handleMarkDone = () => {
    setState((prev) => prev.filter((task) => task.id !== taskData.id));
    setOpposite((prev) => [...prev, { ...taskData, isDone: true }]);
  };

  const handleRestore = () => {
    setState((prev) => prev.filter((task) => task.id !== taskData.id));
    setOpposite((prev) => [...prev, { ...taskData, isDone: false }]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.name}>{taskData.name}</h2>
        {taskData.isDone ? (
          <button className={styles.restore} onClick={handleRestore}>
            <RestoreIcon />
          </button>
        ) : (
          <button className={styles.check} onClick={handleMarkDone}>
            <CheckCircleOutlineIcon />
          </button>
        )}
      </div>
      <p className={styles.desc}>{taskData.description}</p>
    </div>
  );
};
