import React from "react";
import NavItem from "./NavItem";

const navItems = [
  { text: "Удиртгал", children: ["Child 1", "Child 2"] },
  { text: "Компанийн", children: ["Child 3", "Child 4"] },
  { text: "Стратегийн", children: ["Child 5", "Child 6"] },
  { text: "Бизнесийн", children: ["Child 7", "Child 8"] },
  { text: "Удирдлага", children: ["Child 9", "Child 10"] },
  { text: "Санхүүгийн", children: ["Child 11", "Child 12"] },
];

function NavBar({ openIndex, onToggle, closeMenu }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-[70px]">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          text={item.text}
          isOpen={openIndex === index}
          onToggle={() => onToggle(index)}
          closeMenu={closeMenu}  
        />
      ))}
    </div>
  );
}

export default NavBar;
