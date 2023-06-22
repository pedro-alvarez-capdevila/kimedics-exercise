import { Activity } from "react-feather";
import { useStyles } from "../styles";

export const SideBarTitle = ({isOpen}: {isOpen: boolean}) => {
  const { classes } = useStyles({isOpen});

  return (
    <div className={classes.logoContainer}>
      {isOpen 
        ? <h1 className="logo">Logo</h1>
        : <Activity />
      }
    </div>
  );
};
