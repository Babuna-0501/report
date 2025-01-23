import React from 'react';
import KhanBankTower from '../../assets/Khan Bank tower-4.png';

const BrandSection = () => {
  const textBlocks = [
    {
      title: "Уриа үг",
      content: ["Хамтын өсөлт төгөлдөр"],
      icon: "👁️" // Replace with an actual SVG or icon
    },
    {
      title: "Алсын хараа",
      content: [
        "Харилцагчидтайгаа хамт эгнэгт өсөж хөгждөг,",
        "итгэл төгөлдөр банк байна."
      ],
      icon: "📘"
    },
    {
      title: "Эрхэм зорилго",
      content: [
        "Бид харилцагчдынхаа санхүүгийн аяллын алхам",
        "бүрд хамгийн шилдэг, шинэлэг бүтээгдэхүүн",
        "үйлчилгээг хүргэнэ."
      ],
      icon: "🎯"
    }
  ];

  return (
    <main className="flex flex-col items-center w-full bg-gray-50 py-10">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full max-w-6xl px-6 mb-10">
        <div>
          <h1 className="text-sm text-gray-500">УДИРТГАЛ / <span className="text-gray-400">БИДНИЙ БРЭНД</span></h1>
          <h2 className="mt-4 text-4xl font-bold text-yellow-600">БИДНИЙ БРЭНД</h2>
        </div>
        <nav className="text-sm text-gray-500">ДАРААГИЙНХ / ИДНИЙ ТУХАЙ</nav>
      </header>

      {/* Text Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl px-6">
        {textBlocks.map((block, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white rounded-lg p-6">
            <div className="text-4xl text-green-600 mb-4">{block.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">{block.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {block.content.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* Image Section */}
      {/* <div className="flex justify-center items-center mt-10 max-w-6xl px-6">
        <img
          className="rounded-lg shadow-lg w-full"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e7508f7e4fd5d9689acc5e9f6bc2d37f3e6ad3a67846bad695d88b3291d163?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
          alt="Building"
        />
      </div> */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-6 mx-auto">
        <div>
          <img src={KhanBankTower} alt="Placeholder Image" className="w-full h-auto" />
        </div>
        <div className="px-6 py-8 bg-white">
          <h2 className="text-2xl font-semibold text-[#1B884D] mb-6">Үнэт зүйлс</h2>

          <p className="mb-4">
            <span className="font-bold">Хөгжил цэцэглэлтийн түүчээлэгч:</span>  
            Бидний үүрэг банкны үйлчилгээ үзүүлэхийн зэрэгцээ харилцагчид, ажилтнууд, хувьцаа эзэмшигчдээ өсөлт хөгжлийн замд хөтлөхөд чиглэнэ.
          </p>

          <p className="mb-4">
            <span className="font-bold">Тогтвортой хөгжилд манлайлагч:</span>  
            Бид нэг байрандаа зогсдоггүй. Тогтвортой бизнесийг бүтээхийн төлөө тасралтгүй суралцаж, дасан зохицож, улам сайжирдаг учраас харилцагчдаа зорьж буй ирээдүйд нь хүргэх ажлаа улам төгөлдөржүүлнэ.
          </p>

          <p className="mb-4">
            <span className="font-bold">Шилдэг цахим бүтээгдэхүүн үйлчилгээ үзүүлэгч:</span>  
            Харилцагч бүр шилдгийг хүлээн авах учиртай. Тиймээс бид ирээдүйн сайн сайханд хөтлөх санхүүгийн ухаалаг арга хэрэгсэл, бүтээгдэхүүн үйлчилгээгээр түүчээлнэ.
          </p>

          <p className="mb-4">
            <span className="font-bold">Итгэлт зөвлөгч:</span>  
            Харилцагчид маань хэдэн арваны турш санхүүгээ бидэнд даатгаж ирсэн билээ. Энэхүү хүндтэй үйлсийг бид бахархалтайгаар үргэлжлүүлж, найдвартай зөвлөх, итгэлтэй түнш байж, үргэлж сайны төлөө зүтгэх болно.
          </p>
        </div>
      </div>


      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-6xl px-6">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-yellow-600">Corporate</h4>
          <p className="text-sm text-gray-600">Талбартаа цойлох өрнүүн ажлын тань замналд санхүүгийн найдвартай түшиг болж, амжилт бүтээлээр дүүрэн өсөлтийг хамтдаа бүтээе.</p>
          <strong>ХӨГЖЛИЙГ ХУРДАСГАХ ҮЙЛС ТӨГӨЛДӨР</strong>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-green-600">Business</h4>
          <p className="text-sm text-gray-600">Санхүүгийн цогц үйлчилгээ, шилдэг бүтээгдэхүүнээр бизнесийн тань хөшүүрэг болж, үр шимтэй өсөлтийг хамтдаа бүтээе.</p>
          <strong>АМЖИЛТ ТӨГӨЛДӨР</strong>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-orange-600">Priority</h4>
          <p className="text-sm text-gray-600">Хамгаас үнэтэй цаг хугацааг тань эрхэмлэж, санхүүгийн аяллын алхам бүрд итгэл нэмж, тав тухыг мэдрүүлэх үйлчилгээг танд зориулан урлав.</p>
          <strong>ИТГЭЛ ТӨГӨЛДӨР</strong>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-teal-600">Signature</h4>
          <p className="text-sm text-gray-600">Бид оргилд хүрэх аяллын тань алхам бүрд урам зориг төрүүлж, өсөлтийг хамтдаа урлана.</p>
          <strong>ТЭМҮҮЛЭЛ ТӨГӨЛДӨР</strong>
        </div>
      </div>
    </main>
  );
};

export default BrandSection;
