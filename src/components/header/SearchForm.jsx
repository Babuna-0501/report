import * as React from "react";

function SearchForm() {
  return (
    <form className="hidden md:flex relative flex-col grow shrink-0 my-auto aspect-[12.1] basis-0 w-fit">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b205f5e05f41f531bef96ed3428ce0b80bd613ef49f63e31a1aae7735cd4c568?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col gap-5 justify-between py-1.5 pr-4 pl-1.5 w-full aspect-[12.1]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/621f18e88763efaec5c34d4606962bfa91cd7fec184d67f711e41de0e2b2636d?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Decorative form background"
          className="object-cover absolute inset-0 size-full"
        />
        <label htmlFor="searchInput" className="sr-only">Search</label>
        <input
          type="text"
          id="searchInput"
          className="relative text-sm text-stone-800 text-opacity-20"
          placeholder="Хайлтаа оруулна уу..."
        />
        <div className="flex relative gap-2.5 self-start">
          <div className="flex shrink-0 w-px h-5 bg-stone-800 bg-opacity-10" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21ae75b8c3abc054d2fe073c005e916724589d060ff0abe9007e421a5453ff04?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt="Search Icon"
            className="object-contain shrink-0 self-start w-4 aspect-[1.07]"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
