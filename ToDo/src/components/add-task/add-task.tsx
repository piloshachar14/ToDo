import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import React, { ChangeEvent, useState } from "react";
import { TaskData } from "../../App";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
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
      isDone: false,
    });
    handleClose();
  };
  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Dialog
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
      <DialogTitle
        sx={{
          paddingTop: "30px",
        }}
        component="h1"
        align="center"
      >
        Add A Task
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
        <ClickAwayListener onClickAway={handleClickAway}>
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
              size="medium"
              onChange={handleNameChange}
            />
            <TextField
              hiddenLabel
              defaultValue=""
              margin="dense"
              variant="filled"
              label="task description"
              size="medium"
              onChange={handleDescChange}
            />
          </Stack>
        </ClickAwayListener>
        <Stack
          sx={{
            marginTop: "20px",
          }}
          spacing={4}
        />
        <Stack spacing={4} direction="row">
          <Button
            sx={{
              backgroundColor: "#8a4af3",
              transitionDuration: "100ms",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#5320a4",
                transform: "scale(1.2)",
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
              backgroundColor: "#8a4af3",
              transitionDuration: "100ms",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#5320a4",
                transform: "scale(1.2)",
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
  );
};
