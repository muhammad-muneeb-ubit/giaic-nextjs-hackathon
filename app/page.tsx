import Image from "next/image";
import Sale from "./component/Sale";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cardwosale from "./component/Cardwosale";
import Cardwsale from "./component/Cardwsale";
import Category from "./component/Category";
import Happycustomer from "./component/Happycustomer";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Sale />
      <Navbar />
      <Hero />
      
      <div className="w-full h-[122px] bg-black flex justify-between items-center gap-[40px] md:gap-[80px] px-[20px] md:px-[100px]">
        <div><Image src={"/br1.png"} alt="brand-1" width={166.48} height={33.16} className="w-full h-auto" /></div>
        <div><Image src={"/br2.png"} alt="brand-2" width={91} height={38} className="w-full h-auto" /></div>
        <div><Image src={"/br3.png"} alt="brand-3" width={156} height={36} className="w-full h-auto" /></div>
        <div><Image src={"/br4.png"} alt="brand-4" width={194} height={32} className="w-full h-auto" /></div>
        <div><Image src={"/br5.png"} alt="brand-5" width={206.79} height={33.35} className="w-full h-auto" /></div>
      </div>

      <div>
        <h1 className="font-bold text-[48px] text-center mt-[72px] mb-[50px]">NEW ARRIVALS</h1>
        <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center">
          <Cardwosale name={"T-SHIRT WITH TAPE DETAILS"} clothimageUrl={"/pic1.webp"} price={"120$"} ratingimageUrl={"/rating4.5.png"} />
          <Cardwsale name={"SKINNY FIT JEANS"} clothimageUrl={"/pic2.webp"} price={"240$"} ratingimageUrl={"/rating3.5.png"} removeprice={"260$"} off={"-20$"} />
          <Cardwosale name={"CHECKERED SHIRT"} clothimageUrl={"/pic3.webp"} price={"180$"} ratingimageUrl={"/rating4.5.png"} />
          <Cardwsale name={"SLEEVE STRIPED T-SHIRT"} clothimageUrl={"/pic4.webp"} price={"130$"} ratingimageUrl={"/rating4.5.png"} removeprice={"160$"} off={"-30$"} />
        </div>
        <div className="flex justify-center items-center">
          <button className="border-black border-[1px] px-[80px] py-[15px] mt-[36px] hover:bg-black hover:text-white">View All</button>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[48px] text-center mt-[72px] mb-[50px]">TOP SELLING</h1>
        <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center">
          <Cardwsale name={"VERTICAL STRIPED SHIRT"} clothimageUrl={"/pic5.webp"} price={"212$"} ratingimageUrl={"/rating5.png"} removeprice={"232$"} off={"-20$"} />
          <Cardwosale name={"COURAGE GRAPHIC T-SHIRT"} clothimageUrl={"/pic6.webp"} price={"145$"} ratingimageUrl={"/rating4.png"} />
          <Cardwosale name={"LOOSE FIT BERMUDA SHORTS"} clothimageUrl={"/pic7.webp"} price={"80$"} ratingimageUrl={"/rating3.png"} />
          <Cardwosale name={"FADED SKINNY JEANS"} clothimageUrl={"/pic8.webp"} price={"210$"} ratingimageUrl={"/rating4.5.png"} />
        </div>
        <div className="flex justify-center items-center">
          <button className="border-black border-[1px] px-[80px] py-[15px] mt-[36px] hover:bg-black hover:text-white">View All</button>
        </div>
      </div>

      <Category />
      <Happycustomer />
      <Newsletter />
      <Footer />
    </>
  );
}
