import * as React from "react";
import ShareholderCard from "../shareholderCard";
import { shareholderData } from "../data/shareholderData";

export default function Shareholders() {
  return (
    <main className="flex flex-col items-start">
      <nav className="flex flex-wrap gap-10 self-stretch text-base text-stone-300 max-md:mr-2.5 max-md:max-w-full" aria-label="Page navigation">
        <div className="flex flex-col flex-1">
          <div>
            KОМПАНИЙН ЗАСАГЛАЛ{" "}
            <span className="text-zinc-500">ХУВЬЦАА ЭЗЭМШИГЧИД</span>
          </div>
          <div className="flex shrink-0 mt-3.5 max-w-full bg-orange-300 h-[5px] w-[374px] max-md:mr-2.5" />
        </div>
        <div className="self-start">
          ДАРААГИЙНХ / ҮЙЦЭТГЭХ ЗАХИРЛЫН МЭНДЧИЛГЭЭ
        </div>
      </nav>

      <section className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-stone-800 max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-5xl font-semibold text-orange-300 max-md:max-w-full max-md:text-4xl">
                ХУВЬЦАА ЭЗЭМШИГЧИД
              </h1>
              <div className="flex shrink-0 mt-24 max-w-full bg-stone-50 h-[425px] w-[994px] max-md:mt-10" />
              <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Монгол Улсын Компанийн тухай хуулийн 59.1-д заасны дагуу "ХААН
                Банк" ХК-ийн эрх барих дээд байгууллага нь "ХААН Банк" ХК-ийн{" "}
              </div>
              <div className="max-md:mr-2.5 max-md:max-w-full">
                хувьцаа эзэмшигчдийн хурал байна. "ХААН Банк" ХК-ийн хувьцаа
                эзэмшигчид нь ээлжит болон ээлжит бус хурал хуралдуулах замаар{" "}
              </div>
              <div className="mr-11 max-md:mr-2.5 max-md:max-w-full">
                тус банкийг удирдах ба хувьцаа эзэмшигчид хуралд өөрсдийн
                эзэмшиж буй хувьцааны тоогоор саналын эрхтэй оролцоно. ХААН{" "}
              </div>
              <div className="self-start max-md:max-w-full">
                Банкны хувьцааг эзэмшиж буй хүн бүр тус банкны хувьцаа
                эзэмшигчдийн хуралд оролцох эрхтэй.
              </div>
              <div className="self-start mt-3.5 max-md:max-w-full">
                2023 оны 12-р сарын 31-ний өдрийн байдлаар "ХААН Банк" ХК-ийн
                хувьцаа эзэмшлийн бүтэц дараах байдалтай байна.
              </div>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-stone-50 h-[595px] w-[472px] max-md:mt-10" />
          </aside>
        </div>
      </section>

      {shareholderData.map((shareholder, index) => (
        <ShareholderCard key={index} {...shareholder} />
      ))}

      <section className="flex flex-col items-start px-6 pt-7 text-base bg-zinc-100 text-stone-800 max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          ХААН Банк нь Банкны тухай хуульд оруулсан нэмэлт, өөрчлөлтийн хүрээнд
          2021 оны 2-р сараас эхлэн нээлттэй хувьцаат{" "}
        </div>
        <div className="max-md:max-w-full">
          компани болох бэлтгэл ажлыг холбогдох хууль, журамд заасан хугацаанд,
          шат дараатайгаар хийж ирсэн. Зохицуулагч{" "}
        </div>
        <div className="self-stretch max-md:max-w-full">
          байгууллагуудаас холбогдох зөвшөөрлүүдийг хүлээн авсны дагуу анхдагч
          зах зээлийн арилжааны нээлтийг 2023 оны 4-р сарын{" "}
        </div>
        <div className="max-md:max-w-full">
          13-ны өдөр хийсэн. Банк нийт хувьцааныхаа 10 хувь буюу 191,219,800
          ширхэг хувьцааг олон нийтэд санал болгосон нь{" "}
        </div>
        <div className="self-stretch max-md:mr-2 max-md:max-w-full">
          Монголын хөрөнгийн зах зээлийн хамгийн өндөр дүнтэй, хамгийн олон
          захиалга авсан, хамгийн олон хөрөнгө оруулагчидтай,{" "}
        </div>
        <div className="self-stretch max-md:mr-1 max-md:max-w-full">
          хамгийн хүртээмжтэй анхдагч зах зээлийн арилжаа болсноороо онцлог
          болсон бөгөөд тус хувьцаа одоо Монголын хөрөнгийн{" "}
        </div>
        <div>биржид нээлттэй арилжаалагдаж байна.</div>
      </section>
    </main>
  );
}