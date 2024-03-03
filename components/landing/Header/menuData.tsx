export interface MenuItem {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
}

const menuData: MenuItem[] = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "About", path: "/", newTab: false },
  { id: 3, title: "Features", path: "#features", newTab: false },
  { id: 4, title: "Support", path: "#contact", newTab: false },
];

export default menuData;
