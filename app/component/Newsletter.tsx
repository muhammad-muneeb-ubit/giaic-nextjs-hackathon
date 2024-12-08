// import Image from "next/image"

// const Newsletter = () => {
//   return (
//     <div className=" h-[180px] mx-[100px] bg-black rounded-lg flex justify-center items-center"> 
//       <div className="w-[60%] py-[43px] pl-[50px] font-bold text-[40px] leading-10 text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
//       <div className="w-[40%] flex flex-col justify-center items-center gap-3">
//         <div><Image src={"/email-input.png"} alt="brand-1" width={349} height={48}/></div>
//         <button><Image src={"/email-btn.png"} alt="brand-1" width={349} height={48}/></button>
//       </div>
//     </div>
//   )
// }

// export default Newsletter

import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="h-[180px] mx-[20px] md:mx-[100px] bg-black rounded-lg flex justify-center items-center py-4 px-6">
      <div className="w-full md:w-[60%] py-[20px] md:py-[43px] pl-[30px] md:pl-[50px] font-bold text-[28px] md:text-[40px] leading-8 md:leading-10 text-white">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-3">
        <div className="w-full">
          <Image src={"/email-input.png"} alt="brand-1" width={349} height={48} />
        </div>
        <button className="w-full">
          <Image src={"/email-btn.png"} alt="brand-1" width={349} height={48} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
