import React from "react";

function NavItem({ text, isOpen, onToggle, closeMenu }) {
  return (
    <div className="relative">
      <div
        className="px-4 py-2 md:w-[130px] md:border-l md:h-full flex items-center justify-center text-center cursor-pointer"
        onClick={() => {
          onToggle();   // Toggling submenu
          closeMenu();  // Close mobile menu after item click
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default NavItem;
