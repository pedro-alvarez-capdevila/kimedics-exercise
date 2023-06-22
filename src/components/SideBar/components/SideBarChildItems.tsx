import { MenuItem } from "../menuItems";
import { SideBarChildLink } from "./SideBarChildLink";

export const SideBarChildItems = ({
  setIsOpen, item, isExpanded, isOpen
}: {
  setIsOpen: (value: boolean) => void, 
  item: MenuItem,
  isExpanded: boolean,
  isOpen: boolean,
}) => (
  <>
  {item.children && isExpanded &&
    item.children.map((child: MenuItem, childIndex: number) => (
      <SideBarChildLink 
        key={`${child.name}-${childIndex}`}
        isOpen={isOpen}
        item={child}
      /> 
    ))}
  </>
)
