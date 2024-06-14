import React from 'react'
import "./style.css"

interface MenuItem {
    label: string;
    link: string;
}
  
interface MenuProps {
    items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <nav className="menu">
        <ul className="menu-list">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} className="menu-link">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
};

export default Menu