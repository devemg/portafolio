import { faAt, faCode, faFolderOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "../../models/Menu-item";

export const items: MenuItem[] = [
    {
      id: 1,
      title: "Home",
      icon: faHome,
      url: "/",
    },
    {
      id: 2,
      title: "Skills",
      icon: faCode,
      url: "/skills",
    },
    {
      id: 3,
      title: "Projects",
      icon: faFolderOpen,
      url: "/projects",
    },
    {
      id: 4,
      title: "Contact",
      icon: faAt,
      url: "/contact",
    },
  ];
  