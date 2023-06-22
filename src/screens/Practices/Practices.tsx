import { PracticeListItem } from "./Components/PracticeListItem";
import { items } from "./items";
import { useStyles } from "./styles";

export const Practices = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.itemsContainer}>
        {items.map((item,index)=>(
          <PracticeListItem key={`practicesItem-${index}`} totalBeds={item.totalBeds} name={item.name} />
        ))}
      </div>
    </div>
  );
};
