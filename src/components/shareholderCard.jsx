export default function ShareholderCard({ name, percentage, iconSrc, textColor, bgColor }) {
    return (
      <div className={`flex flex-col mt-12 max-w-full font-semibold ${bgColor} w-[994px] max-md:mt-10`}>
        <div className="flex flex-wrap gap-5 justify-between px-6 py-2.5 w-full max-md:px-5 max-md:max-w-full">
          <div className={`my-auto text-xl ${textColor}`}>{name}</div>
          <div className="flex gap-5 text-6xl text-orange-300 max-md:text-4xl">
            <div className="grow max-md:text-4xl">
              {percentage}<span className="text-4xl text-orange-300">%</span>
            </div>
            <img
              loading="lazy"
              src={iconSrc}
              alt=""
              className="object-contain shrink-0 my-auto w-14 aspect-square"
            />
          </div>
        </div>
      </div>
    );
  }