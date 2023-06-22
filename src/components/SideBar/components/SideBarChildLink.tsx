import { NavLink } from "react-router-dom";
import { useStyles } from "../styles";

export const SideBarChildLink = ({
  isOpen, item
}:{
  isOpen: boolean, 
  item: any,
}) => {
  const { classes, cx } = useStyles({isOpen});

  return (
    <NavLink to={item.path} className={cx(classes.link, classes.childrenLink)}>
      <div className={classes.subItemText}>{item.name}</div>
    </NavLink>
  );
};
