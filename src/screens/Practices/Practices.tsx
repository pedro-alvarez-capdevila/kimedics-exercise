import { TextInput } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Search } from "react-feather";
import usePracticesPresenter from "../../presenters/PracticesPresenter/usePracticesPresenter";
import { PracticeListItem } from "./Components/PracticeListItem";
import { useStyles } from "./styles";

const Practices = () => {
  const presenter = usePracticesPresenter();
  const { classes } = useStyles();

  useEffect(()=>{
    presenter.fetchPractices()
  }, [])

  return (
    <div className={classes.container}>
      <TextInput 
        value={presenter.searchQuery} 
        onChange={event => presenter.changeSearchQuery( event.currentTarget.value )}
        className={classes.searchBar}
        icon={<Search size={15}/>}
      />
      <div className={classes.itemsContainer}>
        {presenter.practiceItemsToShow.map((item,index)=>(
          <PracticeListItem key={`practicesItem-${index}`} totalBeds={item.totalBeds} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default observer( Practices )
