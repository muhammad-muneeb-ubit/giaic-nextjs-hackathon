import Image from "next/image"
import Sale from "./component/Sale";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";


export default function Home() {
  return (
    <>
    <Sale />
    <Navbar />
    <Hero />
    <div className="w-full h-[122px] bg-black flex justify-between items-center gap-[80px] px-[100px]">
      <div><Image src={"/br1.png"} alt="brand-1" width={166.48} height={33.16}/></div>
      <div><Image src={"/br2.png"} alt="brand-1" width={91} height={38}/></div>
      <div><Image src={"/br3.png"} alt="brand-1" width={156} height={36}/></div>
      <div><Image src={"/br4.png"} alt="brand-1" width={194} height={32}/></div>
      <div><Image src={"/br5.png"} alt="brand-1" width={206.79} height={33.35}/></div>
    </div>
    </>
  );
}
