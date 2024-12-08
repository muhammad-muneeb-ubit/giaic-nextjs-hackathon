import Sale from "../component/Sale";
import Navbar from "../component/Navbar";
import Cardwosale from "../component/Cardwosale";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
        < Sale />
        < Navbar />
    <div>
    <h1 className="font-bold text-[48px] text-center mt-[72px] mb-[50px]">NEW ARRIVALS</h1>

    <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center mt-16">
                <Cardwosale name={"T-SHIRT WITH TAPE DETAILS"} clothimageUrl={"/pic5.webp"} price={"180$"} ratingimageUrl={"/rating4.5.png"} />
                <Cardwosale name={"SKINNY FIT JEANS"} clothimageUrl={"/pic6.webp"} price={"240$"} ratingimageUrl={"/rating3.5.png"} />
                <Cardwosale name={"CHECKERED SHIRT"} clothimageUrl={"/pic7.webp"} price={"150$"} ratingimageUrl={"/rating3.5.png"} />
                <Cardwosale name={"SLEEVE STRIPED T-SHIRT "} clothimageUrl={"/pic8.webp"} price={"230$"} ratingimageUrl={"/rating5.png"} />
                <Cardwosale name={"VERTICAL STRIPED SHIRT"} clothimageUrl={"/pic1.webp"} price={"210$"} ratingimageUrl={"/rating3.5.png"} />
                <Cardwosale name={"COURAGE GRAPHIC T-SHIRT"} clothimageUrl={"/pic2.webp"} price={"250$"} ratingimageUrl={"/rating4.5.png"} />
                <Cardwosale name={"LOOSE FIT BERMUDA SHORTS"} clothimageUrl={"/pic3.webp"} price={"140$"} ratingimageUrl={"/rating5.png"} />
                <Cardwosale name={"FADED SKINNY JEANS"} clothimageUrl={"/pic4.webp"} price={"160$"} ratingimageUrl={"/rating3.png"} />
                <Cardwosale name={"T-SHIRT WITH TAPE DETAILS"} clothimageUrl={"/pic5.webp"} price={"170$"} ratingimageUrl={"/rating3.5.png"} />
                <Cardwosale name={"SKINNY FIT JEANS"} clothimageUrl={"/pic6.webp"} price={"180$"} ratingimageUrl={"/rating4.png"} />
                <Cardwosale name={"CHECKERED SHIRT"} clothimageUrl={"/pic7.webp"} price={"270$"} ratingimageUrl={"/rating4.5.png"} />
                <Cardwosale name={"SLEEVE STRIPED T-SHIRT"} clothimageUrl={"/pic8.webp"} price={"200$"} ratingimageUrl={"/rating5.png"} />
           </div>
     
    </div>
       < Newsletter />
       < Footer />
    </div>
  )
}

export default page
