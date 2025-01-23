import React from 'react';

const ImageSection = () => {
  return (
    <section className="flex flex-col items-start mt-24 w-full max-md:mt-10 max-md:max-w-full" aria-label="Brand imagery section">
      <div className="self-end w-full max-w-[1518px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-zinc-100 h-[796px] w-[759px]" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-neutral-50 h-[796px] w-[759px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-48 text-base text-stone-800 max-md:mt-10">
        <p>Талбартаа цойлох өрнүүн ажлын тань замналд санхүүгийн найдвартай түшиг</p>
        <div className="flex flex-col ml-6 max-md:ml-2.5">
          <p className="max-md:mx-0.5">болж, амжилт бүтээлээр дүүрэн</p>
          <p className="self-center">өсөлтийг хамтдаа бүтээе.</p>
          <p className="mt-3.5 font-bold">ХӨГЖЛИЙГ ХУРДАСГАХ ҮЙЛС</p>
          <p className="self-center font-bold">ТӨГӨЛДӨР</p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;