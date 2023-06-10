import { NavLink } from "react-router-dom";
import { IconComponent } from "../../components/icon/IconComponent";
import { MenuItem } from "../../models/Menu-item";
import "./MenuComponent.scss";

const items: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    id: 2,
    title: "Skills",
    icon: "computer",
    url: "/skills",
  },
  {
    id: 3,
    title: "Projects",
    icon: "folder",
    url: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    icon: "at",
    url: "/contact",
  },
];

export const MenuComponent = () => {
  return (
    <div className="menu">
      {items.map((item) => (
        <NavLink to={item.url} key={item.id}
          className={({ isActive, isPending }) => {
    return isActive ? "menu-item active" : isPending ? "menu-item pending" : "menu-item";
  }}>
          <span className="menu-item-title">{item.title}</span>
          <IconComponent classNames={['menu-item-icon']} name={item.icon} width="28px" height="28px" />
        </NavLink>
      ))}
    </div>
  );
};
