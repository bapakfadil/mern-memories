import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

export { useStyles, theme };