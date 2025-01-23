import * as React from "react";
import Hero from "../../assets/Priority_airport.png";

function Home() {
  return (
    <div className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="px-16 py-4 w-full text-xl text-orange-300 bg-emerald-900 max-md:px-5 max-md:max-w-full">
        <span className="md:visible invisible">ЖИЛИЙН ТАЙЛАН 2024</span>
      </div>
      {/* Image Container */}
      <div className="relative w-full">
        <img
          loading="lazy"
          src={Hero}
          alt="Decorative Image"
          className="w-full"
        />
        {/* Overlayed Text */}
        <div className="absolute top-0 left-0 flex flex-col items-start px-20 py-56 max-w-full text-9xl text-orange-300 whitespace-nowrap w-[871px] max-md:px-5 max-md:py-24 max-md:text-4xl">
          <div className="self-end max-md:max-w-full max-md:text-4xl text-left">
            ЖИЛИЙН <br/> ТАЙЛАН<br/> 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
