import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import React, { ChangeEvent, useState } from "react";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddTaskDialog: React.FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [taskName, settaskName] = useState("");
  const [taskDesc, settaskDesc] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    settaskName(e.target.value);
  };

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    settaskDesc(e.target.value);
  };
  const handleOnSubmit: () => void = () => {
    console.log(taskName, taskDesc);
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
        }}
      >
        <DialogTitle component="h1" align="center">
          Add Task
        </DialogTitle>
        <DialogContent>
          <Stack
            component="form"
            sx={{
              width: "25ch",
            }}
            spacing={4}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              defaultValue=""
              variant="filled"
              size="small"
              onChange={handleNameChange}
            />
            <TextField
              hiddenLabel
              defaultValue=""
              variant="filled"
              size="small"
              onChange={handleDescChange}
            />
          </Stack>
          <Stack spacing={4} />
          <Stack spacing={4} direction="row">
            <Button onClick={() => handleClose()} variant="contained">
              Cancel
            </Button>
            <Button
              onClick={() => handleOnSubmit()}
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
