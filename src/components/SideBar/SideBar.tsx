import React, { ReactNode, useState } from "react";
import { SideBarItems } from "./components/SideBarItems";
import { SideBarTitle } from "./components/SideBarTitle";
import { useStyles } from "./styles";

export const SideBar = ({children}: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { classes } = useStyles({isOpen});

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
          <SideBarTitle isOpen={isOpen} />
          <SideBarItems isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
};
