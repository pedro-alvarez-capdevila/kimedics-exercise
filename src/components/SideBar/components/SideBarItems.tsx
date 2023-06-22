import React, { useState } from "react";
import { menuItems } from "../menuItems";
import { SideBarChildItems } from "./SideBarChildItems";
import { SideBarItem } from "./SideBarItem";

export const SideBarItems = ({
  setIsOpen, isOpen
}: {
  setIsOpen: (value: boolean) => void, 
  isOpen: boolean
}) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleItemWithChildren = (index: number) => {
    setExpandedItems((prevExpandedItems) => ({[index]: !prevExpandedItems[index]}));
  };

  return (
    <>
    {menuItems?.map((item, index) => {
        const onClickLinkItem = () => {
          toggleItemWithChildren(-1);
          setIsOpen(item.sideBarIsOpened)
        }
        const onClickItem = () => {
          toggleItemWithChildren(index);
          setIsOpen(item.sideBarIsOpened)
        }
        return (
          <React.Fragment key={index}>
              <SideBarItem 
                isOpen={isOpen} 
                item={item} 
                onClickItem={onClickItem} 
                onClickLinkItem={onClickLinkItem} 
              />

            <SideBarChildItems isOpen={isOpen} item={item} setIsOpen={setIsOpen} isExpanded={expandedItems[index]} />

          </React.Fragment>
        )
      }
    )}
    </>
  );
};
