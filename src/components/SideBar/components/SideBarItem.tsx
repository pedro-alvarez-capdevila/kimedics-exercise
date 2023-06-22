import { UnstyledButton } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../menuItems";
import { useStyles } from "../styles";

export const SideBarItem = ({
  isOpen, item, onClickItem, onClickLinkItem
}:{
  isOpen: boolean, 
  item: MenuItem,
  onClickLinkItem: () => void,
  onClickItem: () => void
}) => {
  const { classes } = useStyles({isOpen});

  return (
    item.children
      ? (
      <UnstyledButton onClick={onClickItem} className={classes.link}>
        <div className={classes.itemLinkIcon}>{item.icon}</div>
        <div className={classes.itemText}>{item.name}</div>
      </UnstyledButton>
      )
      : (
      <NavLink onClick={onClickLinkItem} to={item.path} className={classes.link}>
        <div className={classes.itemLinkIcon}>{item.icon}</div>
        <div className={classes.itemText}>{item.name}</div>
      </NavLink>
      )
  );
};
