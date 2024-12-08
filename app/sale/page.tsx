import Image from "next/image";
import Sale from "../component/Sale";
import Navbar from "../component/Navbar";
import Cardwsale from "../component/Cardwsale";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
const page = () => {
  return (
    <div>
           <Sale />
           <Navbar />
    <h1 className="font-bold text-[48px] text-center mt-[72px] mb-[50px]">On Sale!!!</h1>

           <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center mt-16">
                <Cardwsale name={"T-SHIRT WITH TAPE DETAILS"} clothimageUrl={"/pic1.webp"} price={"180$"} ratingimageUrl={"/rating4.5.png"} removeprice={"200$"} off={"-10$"} />
                <Cardwsale name={"SKINNY FIT JEANS"} clothimageUrl={"/pic2.webp"} price={"240$"} ratingimageUrl={"/rating3.5.png"} removeprice={"260$"} off={"-20$"} />
                <Cardwsale name={"CHECKERED SHIRT"} clothimageUrl={"/pic3.webp"} price={"150$"} ratingimageUrl={"/rating3.5.png"} removeprice={"180$"} off={"-10$"} />
                <Cardwsale name={"SLEEVE STRIPED T-SHIRT "} clothimageUrl={"/pic4.webp"} price={"230$"} ratingimageUrl={"/rating5.png"} removeprice={"250$"} off={"-30$"} />
                <Cardwsale name={"VERTICAL STRIPED SHIRT"} clothimageUrl={"/pic5.webp"} price={"210$"} ratingimageUrl={"/rating3.5.png"} removeprice={"230$"} off={"-20$"} />
                <Cardwsale name={"COURAGE GRAPHIC T-SHIRT"} clothimageUrl={"/pic6.webp"} price={"250$"} ratingimageUrl={"/rating4.5.png"} removeprice={"300$"} off={"-30$"} />
                <Cardwsale name={"LOOSE FIT BERMUDA SHORTS"} clothimageUrl={"/pic7.webp"} price={"140$"} ratingimageUrl={"/rating5.png"} removeprice={"160$"} off={"-10$"} />
                <Cardwsale name={"FADED SKINNY JEANS"} clothimageUrl={"/pic8.webp"} price={"160$"} ratingimageUrl={"/rating3.png"} removeprice={"190$"} off={"-20$"} />
                <Cardwsale name={"T-SHIRT WITH TAPE DETAILS"} clothimageUrl={"/pic1.webp"} price={"170$"} ratingimageUrl={"/rating3.5.png"} removeprice={"200$"} off={"-25$"} />
                <Cardwsale name={"SKINNY FIT JEANS"} clothimageUrl={"/pic2.webp"} price={"180$"} ratingimageUrl={"/rating4.png"} removeprice={"200$"} off={"-15$"} />
                <Cardwsale name={"CHECKERED SHIRT"} clothimageUrl={"/pic3.webp"} price={"270$"} ratingimageUrl={"/rating4.5.png"} removeprice={"300$"} off={"-20$"} />
                <Cardwsale name={"SLEEVE STRIPED T-SHIRT"} clothimageUrl={"/pic4.webp"} price={"200$"} ratingimageUrl={"/rating5.png"} removeprice={"250$"} off={"-20$"} />
           </div>
           <Newsletter />
           <Footer />
    </div>
  )
}

export default page
