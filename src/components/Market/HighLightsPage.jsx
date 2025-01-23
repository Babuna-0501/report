import * as React from "react";
import { HighlightCard } from "./HighLightCard";
import HightLight1 from "../../assets/346464320_971217534320521_6860716161356662993_n.png";

const highlightsData = [
  {
    title: "Sed fringilla mauris sit amet nibonec sodales sagittis",
    content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula 
    eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
    pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.`,
    date: "2024 оны 01 сар",
    imageUrl: HightLight1,
  },
];

export function HighlightsPage() {
  return (
    <main className="flex flex-col items-center max-w-[1920px] mx-auto">
      {/* Header Section */}
      <header className="w-full flex flex-wrap justify-between items-center mb-10 px-4 md:px-20">
        <div className="flex flex-col mt-10 sm:mt-20">
          <h1 className="text-2xl sm:text-3xl font-bold">
            УДИРТГАЛ{" "}
            <span className="text-zinc-500">2024 ОНЫ ОНЦЛОХ ҮЙЛ ЯВДАЛ</span>
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-orange-300 mt-3" />
        </div>
        <nav className="mt-5 sm:mt-0">
          <a href="#" className="text-orange-500">
            ДАРААГИЙНХ / 2024 ОНЫ АМЖИЛТУУД
          </a>
        </nav>
      </header>

      <h2 className="text-4xl sm:text-5xl font-semibold text-orange-300 mb-10 px-4 md:px-20 text-center">
        2024 ОНЫ ОНЦЛОХ ҮЙЛ ЯВДАЛ
      </h2>

      {/* Highlights Section */}
      <section className="relative flex flex-col lg:flex-row justify-center w-full px-4 md:px-20">
        {/* Vertical Divider */}
        <div className="absolute h-full w-1 bg-neutral-300 left-1/2 transform -translate-x-1/2 mt-[40px] hidden lg:block" />

        {/* Left Column */}
        <div className="flex flex-col gap-10 pr-0 lg:pr-10 w-full lg:w-1/2">
          {[...Array(3)].map((_, index) => (
            <HighlightCard key={`left-${index}`} {...highlightsData[0]} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 pl-0 lg:pl-10 w-full lg:w-1/2 mt-10 lg:mt-40">
          {[...Array(3)].map((_, index) => (
            <HighlightCard key={`right-${index}`} {...highlightsData[0]} />
          ))}
        </div>
      </section>
    </main>
  );
}


