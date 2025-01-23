import * as React from "react";

export function HighlightCard({ title, content, date, imageUrl }) {
    return (
      <div className="flex flex-col shadow-lg rounded-md overflow-hidden bg-white transform scale-90 max-w-[709px] max-h-[843px] w-full h-auto">
        {/* Title Section */}
        <div className="bg-neutral-200 p-6 sm:p-10 text-base sm:text-lg font-medium text-greenCustom">
          {title}
        </div>
  
        {/* Content Section */}
        <div className="p-6 sm:p-10">
          <img
            src={imageUrl}
            alt="Highlight event image"
            className="w-full h-100 sm:h-120 object-cover rounded-md"
          />
          <p className="mt-4 sm:mt-6 text-stone-800 leading-relaxed text-sm sm:text-base">
            {content}
          </p>
          <div className="mt-4 sm:mt-6 text-right text-xs sm:text-sm text-zinc-500">
            {date}
          </div>
        </div>
      </div>
    );
  }