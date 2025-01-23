import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/NavBar";
import Burger from "../../assets/Group 213.png";

function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      text: "Удиртгал",
      children: [
        { text: "Бидний брэнд", route: "/brand" },
        { text: "Бидний тухай", route: "/about" },
        { text: "ТУЗ-ын даргын мэндчилгээ", route: "/tuz" },
        { text: "Гүйцэтгэх захирлын мэндчилгээ", route: "/director" },
        "2024 оны онцлох",
        "2024 оны амжилтууд",
      ],
    },
    { text: "Компанийн", children: ["Засаглалын үйл ажиллагаа", "Засаглалын тогтолцоо", "Хувьцаа эзэмшигчид", "Төлөөлөн удирдах зөвлөл", "Төлөөлөн удирдах зөвлөлийн гишүүд"] },
    { text: "Стратегийн", children: ["Бидний стратеги", "Мэдээллийн технологи", "Хүний нөөцийн удирдлага", "Тогтвортой хөгжил"] },
    { text: "Бизнесийн", children: ["Санхүүгийн голлох", "Хөрөнгийн зохицуулалт", "Хөрөнгийн зохицуулалтын төсөл", "Хөрөнгийн зохицуулалтын төсөл", "Хөрөнгийн зохицуулалтын төсөл"] },
    { text: "Удирдлага", children: ["Зээлийн эрсдлийн удирдлага", "Зах зээлийн эрсдэлийн удирдлага"] },
    { text: "Санхүүгийн", children: ["Агуулга", "Хараат бус аудиторын тайлан", "Ерөнхий мэдээлэл"] },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false); // Close menu on item click
  };

  return (
    <header className="w-full py-2 bg-white shadow-md relative">
      <div className="flex items-center px-4 md:max-w-[1519px] md:mx-auto md:px-0">
        {/* Logo */}
        <a href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41dcaa5d6fd1741d654773a126c107423f45a089432ded2d1c3f13a02b62163f?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt="Company Logo"
            className="object-contain w-[120px]"
          />
        </a>

        {/* Burger Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 bg-gray-200 rounded focus:outline-none"
          aria-label="Toggle menu"
        >
          <img src={Burger} alt="Menu Icon" className="object-contain w-6" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap ml-[50px] gap-8 text-sm whitespace-nowrap text-neutral-500">
          <NavBar openIndex={openIndex} onToggle={handleToggle} closeMenu={() => setIsMenuOpen(false)} />
        </nav>
      </div>

      {/* Opened Menu */}
      {openIndex !== null && (
        <div className="absolute top-full left-0 w-full h-[200px] bg-[#064E31] text-white z-50 px-[18vw]">
          {/* Content of the opened menu */}
          <div className="p-4">
            <ul>
              {navItems[openIndex]?.children.map((item, idx) => {
                if (typeof item === 'object' && item.route) {
                  return (
                    <li key={idx}>
                      <Link to={item.route} className="text-white" onClick={handleNavItemClick}>
                        {item.text}
                      </Link>
                    </li>
                  );
                } else {
                  return <li key={idx}>{item}</li>;
                }
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            {/* Same Logo */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41dcaa5d6fd1741d654773a126c107423f45a089432ded2d1c3f13a02b62163f?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
              alt="Company Logo"
              className="object-contain w-[120px]"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-800"
              aria-label="Close menu"
            >
              ✖
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <NavBar />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
