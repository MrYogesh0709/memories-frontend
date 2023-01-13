import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: "20px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  profile: {
    display: "flex",
    gap: 0,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      gap: "1rem",
    },
    width: "400px",
  },
  userName: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    alignItems: "center",
  },

  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
