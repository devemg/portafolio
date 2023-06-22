import { NavLink } from "react-router-dom";
import "./MenuComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { items } from "./menu-items";

export const MenuComponent = () => {
  return (
    <div className="menu">
      {items.map((item) => (
        <NavLink
          to={item.url}
          key={item.id}
          className={({ isActive }) => {
            return isActive
              ? "menu-item active"
              : "menu-item";
          }}
        >
          <span className="menu-item-title">{item.title}</span>
          <FontAwesomeIcon className="menu-item-icon" icon={item.icon} />
        </NavLink>
      ))}
    </div>
  );
};
