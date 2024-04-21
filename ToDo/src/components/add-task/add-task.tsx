import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
type Props = {
  open: boolean;
  setOpen:(open: boolean) => void;
    };
    
export const AddTaskDialog: React.FC<Props> = ({ open, setOpen}) => {
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
            spacing={6}
            noValidate
            autoComplete="off"
          >
            <TextField
              hiddenLabel
              defaultValue=""
              variant="filled"
              size="small"
              value="name"
            />
            <TextField
              hiddenLabel
              defaultValue=""
              variant="filled"
              size="small"
              value="desc"
            />
          </Stack>
          <Stack spacing={4} direction="row">
            <Button onClick {() => setOpen(false)}variant=
            "contained">Cancel</Button>
            <Button variant="contained">submit</Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
