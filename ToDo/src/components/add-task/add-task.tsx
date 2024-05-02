import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import React, { ChangeEvent, useState } from "react";
import { TaskData } from "../../App";
import styles from "./add-task.module.css";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: TaskData) => void;
};

export const AddTaskDialog: React.FC<Props> = ({ open, setOpen, onSubmit }) => {
  const handleClose = () => setOpen(false);
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskDesc(e.target.value);
  };
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleOnSubmit: () => void = () => {
    onSubmit({
      name: taskName,
      description: taskDesc,
      id: crypto.randomUUID(),
    });
    handleClose();
  };

  return (
    <>
      <Dialog
        className="Dialog"
        open={open}
        sx={{
          width: "100%",
          height: "100%",
          position: "center",
          alignContent: "center",
          "& .MuiPaper-root": {
            height: "600px",
            width: "600px",
          },
        }}
      >
        <DialogTitle component="h1" align="center">
          Add Task
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Stack
            component="form"
            sx={{
              width: "25ch",
              gap: "1rem",
            }}
            spacing={4}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              defaultValue=""
              variant="filled"
              margin="dense"
              label="task name"
              size="small"
              onChange={handleNameChange}
            />
            <TextField
              hiddenLabel
              defaultValue=""
              margin="dense"
              variant="filled"
              label="task description"
              size="small"
              onChange={handleDescChange}
            />
          </Stack>
          <Stack
            sx={{
              marginTop: "20px",
            }}
            spacing={4}
          />
          <Stack spacing={4} direction="row">
            <Button
              sx={{
                backgroundColor: "#d4ccff",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#bcb3ef",
                },
              }}
              className="cancel"
              onClick={() => handleClose()}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "#d4ccff",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#bcb3ef",
                },
              }}
              className="submit"
              onClick={handleOnSubmit}
              type="submit"
              variant="contained"
            >
              submit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
