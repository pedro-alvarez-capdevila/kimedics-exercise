import { NavLink } from "react-router-dom";
import { useStyles } from "../styles";

export const SideBarChildLink = ({
  isOpen, item, onClick
}:{
  isOpen: boolean, 
  item: any,
  onClick: () => void,
}) => {
  const { classes, cx } = useStyles({isOpen});

  return (
    <NavLink onClick={onClick} to={item.path} className={cx(classes.link, classes.childrenLink)}>
      <div className={classes.subItemText}>{item.name}</div>
    </NavLink>
  );
};
