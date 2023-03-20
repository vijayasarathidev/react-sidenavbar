import { useState } from "react";
import "./style.css";
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  "Your Work",
  "Activity",
  "Assets",
  "Pinned Items",
  "Following",
  "Trending",
  "Challenges",
  "Spark",
];

export const Sidebar= () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <MenuIcon
          onClick={toggleSidebar}
          className="sidebar-toggle material-symbols-outlined"
        >
          {isOpen ? "menu_open" : "menu"}
        </MenuIcon>
        
        <label className="create-label">CREATE</label>
        <div className="create">
          <button className="create-button">
            <span className="material-symbols-outlined">table_chart</span>
            <span>Pen</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="create-button">
            <span className="material-symbols-outlined">window</span>
            <span>Collection</span>
          </button>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </nav>
      </aside>
    </>
  );
};