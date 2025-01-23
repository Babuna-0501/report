import * as React from "react";

export function NavigationHeader() {
  return (
    <nav 
      className="flex flex-wrap gap-5 justify-around self-stretch w-full text-base text-stone-300 max-md:max-w-full my-5"
      role="navigation"
      aria-label="Page navigation"
    >
      <div className="border-b-2 border-[#D2AC67]">
        УДИРТГАЛ <span className="text-zinc-500">БИДНИЙ ТУХАЙ</span>
      </div>
      <div className="text-[#D2AC67]">
        ДАРААГИЙНХ / УЗ-ИЙН ДАРГЫН МЭНДЧИЛГЭЭ
      </div>
    </nav>
  );
}
