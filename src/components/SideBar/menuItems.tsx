import { BarChart2, Briefcase, MapPin, Users } from "react-feather";

export interface MenuItem {
  path: string;
  name: string;
  icon?: JSX.Element;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    path: "/",
    name: "dashboard",
    icon: <BarChart2 />,
  },
  {
    name: "providers",
    icon: <Users />,
    path: '/',
    children: [
      {
        path: "/jobs",
        name: "dashboard",
      },
      {
        path: "/",
        name: "dashboard 2",
      },
      {
        path: "/practices",
        name: "dashboard 3",
      },
    ],
  },
  {
    path: "/practices",
    name: "practices",
    icon: <MapPin />,
  },
  {
    path: "/jobs",
    name: "jobs",
    icon: <Briefcase />,
  },
];