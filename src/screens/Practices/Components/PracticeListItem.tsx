import { Checkbox } from "@mantine/core";
import { useStyles } from "../styles";

export const PracticeListItem = ({totalBeds, name}:{totalBeds: number, name: string}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.itemContainer}>
      <Checkbox color="cyan" classNames={{input: classes.checkboxInput}} />
      <div className={classes.nameText}>{name}</div>
      <div>({totalBeds})</div>
    </div>
  );
};