import { BarChart, BarChart2, Briefcase, MapPin, Users } from "react-feather";

export interface MenuItem {
  path: string;
  name: string;
  icon?: JSX.Element;
  sideBarIsOpened: boolean;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    path: "/",
    name: "dashboard",
    icon: <BarChart2 />,
    sideBarIsOpened: true,
  },
  {
    name: "providers",
    icon: <Users />,
    path: '/',
    sideBarIsOpened: true,
    children: [
      {
        path: "/jobs",
        name: "dashboard",
        sideBarIsOpened: true,
      },
      {
        path: "/",
        name: "dashboard 2",
        sideBarIsOpened: true,
      },
      {
        path: "/practices",
        name: "dashboard 3",
        sideBarIsOpened: true,
      },
    ],
  },
  {
    path: "/practices",
    name: "practices",
    icon: <MapPin />,
    sideBarIsOpened: false,
  },
  {
    path: "/jobs",
    name: "jobs",
    icon: <Briefcase />,
    sideBarIsOpened: true,
  },
];