import React from "react";
import ChairwomanImage from "../../assets/1. Т.Дарьбум copy 2.png"; // Replace with the actual image path
import Bg from "../../assets/bg.png"; // Replace with the actual image path
import Sign from "../../assets/Group 199.png"; // Replace with the actual image path

const ChairwomanPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-[#004d28] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${Bg})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16">
          <div className="space-y-6">
            <blockquote className="text-xl md:text-2xl font-medium border-l-4 border-white pl-4">
              "In the face of the consequences of the pandemic on Mauritius and on our business, we chose to center our activities around 'performance with purpose'."
            </blockquote>
            <p className="text-lg font-semibold">Т.ДАРЬБУМ</p>
            <p>ХААН Банк, ТУЗ-ийн дарга</p>
          </div>
          <div className="flex justify-end">
            <img
              src={ChairwomanImage}
              alt="Chairwoman"
              className="w-full max-w-sm rounded-lg relative"
            />
          </div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-50 py-4 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex space-x-2">
          <a href="#" className="hover:underline">
            ЭХЛЭЛ
          </a>
          <span>/</span>
          <a href="#" className="hover:underline">
            ТУЗ-ИЙН ДАРГЫН МЭНДЧИЛГЭЭ
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#b58636] mb-10">
          ТУЗ-ИЙН ДАРГЫН МЭНДЧИЛГЭЭ
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-gray-700">
          <div className="space-y-6">
            <p>
              Сайн байцгаана уу, <br />
              Харилцагч, хамтрагч түншүүд, хувьцаа эзэмшигч та бүхэндээ “ХААН Банк” ХК-ийн 2023 оны жилийн тайлангаар мэндчилж буйдаа баяртай байна. 
            </p>
            <p>
            ХААН Банк 2023 онд амжилттай IPO хийж, олон нийтэд нээлттэй хувьцаат компани болсон нь бидний хувьд хамгийн онцлох үйл явдал байлаа. ХААН Банкийг Монголын хөрөнгийн биржийн хамгийн үнэ цэнтэй компани болгоход чин сэтгэлээсээ хичээл зүтгэл гарган ажилласан Гүйцэтгэх захирал, удирдлагын баг болон нийт ажилтнууддаа Төлөөлөн удирдах зөвлөлийн өмнөөс талархал илэрхийлье. 
            </p>
            <p>
            Хүн амын 82 хувьд хүрч ажилладаг, улс даяар 540 гаруй салбар нэгжтэй, хамгийн том банкны хувьд өнгөрөгч онд мөн л санхүүгийн үзүүлэлтээрээ салбараа тэргүүлж, банкны нийт актив 17.4 их наяд, өөрийн хөрөнгө 2 их наяд төгрөгийг давсан бахдам амжилт үзүүлээд байна.
            </p>
            <p>
            Бид өөрсдийн санал болгож буй бүтээгдэхүүн үйлчилгээгээ хүртээмжтэй, түргэн шуурхай болгож, Монгол Улсын өнцөг булан бүрд саадгүй хүргэх зорилтын хүрээнд 2023 онд үндсэн бүтээгдэхүүнүүдээ үргэлжлүүлэн цахимжуулахад анхаарч ажиллалаа.  Улирч буй онд ажилтнууддаа ээлтэй дундын оффис, смарт оффис зэрэг төслүүдээ амжилттай эхлүүлж, 24 цагийн ажиллагаатай, өөртөө үйлчлэх Digi Go дижитал салбаруудаа нээж, ногоон санхүүжилтийн багцаа мэдэгдэхүйц өргөжүүлж, хэрэглээний болон бизнесийн зээлийн цахимжилтыг сайжруулснаар ногоон зээлийн олголтыг хурдасгаж чадсан. Түүнчлэн Төлөөн удирдах зөвлөлөөс ХААН Банкны тогтвортой өсөлтийг хангах дунд хугацааны бизнес болон цахим стратегийг 2023 онд амжилттай баталлаа.
            </p>
          </div>
          <div className="space-y-6">
                <p>Олон нийтэд нээлттэй хувьцаат компанийн хувьд бид компанийн засаглалын тогтолцоогоо тасралтгүй сайжруулан, олон улсын сайн туршлагуудаас суралцаж, хууль, дүрэм журмуудын хэрэгжилтийг тогтмол ханган ажиллаж байна. Монголын хөрөнгийн зах зээлд хамгийн өндөр үнэлгээтэй хувьцаат компанийн хувьд шилдэг компанийн засаглалтай, үлгэр жишээ байгууллага болохоор зорьж байна. Тэр ч утгаараа бид тайлант онд “Санхүүгийн гэмт хэрэг, залилангийн удирдлагын бодлого”, “Гуравдагч талын эрсдэлийн удирдлагын бодлого” зэрэг зохицуулалтын бодлого, журмуудад онцгой анхааран, шинэчлэн баталж, хэрэгжилтийг тогтмол хянан ажиллалаа. </p>
                <p>Хамтын өсөлтөд нэгдсэн хувьцаа эзэмшигч та бүхэндээ, санхүүгийн хэрэгцээ бүрдээ шийдэл болгож манай банкийг сонгодог харилцагчдадаа, бизнесийн үйл ажиллагааг маань ямагт дэмжин ажилладаг хамтрагч байгууллагууддаа ХААН Банкны Төлөөлөн удирдах зөвлөлийн нэрийн өмнөөс талархал илэрхийлье. Бид 2024 онд тогтвортой санхүүжилт, технологийн шинэлэг шийдэл, инновациар түүчээлсэн хүртээмжтэй банк байхыг зорилгоо болгон ажиллах болно.</p>
                <p>Таныг хүндэтгэсэн,</p>
                <img className="relative right-0" src={Sign}/>
          </div>
     
        </div>
       
        <p className="mt-10 font-semibold flex justify-end" >
             <br /> Дарьбум Туяа <br /> ТУЗ-ийн дарга
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 ХААН Банк ХХК | Жилийн Тайлан 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default ChairwomanPage;
