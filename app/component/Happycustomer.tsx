// import Image from "next/image"

// const Happycustomer = () => {
//   return (
//     <div className="">
//       <div className="flex justify-between items-center mx-[100px] ">
//         <div className="head text-[48px] font-bold">OUR HAPPY CUSTOMERS</div>
//         <div className="arrow flex">
//             <Image src={"/leftarrow.png"} alt="brand-1" width={24} height={24}/>
//             <Image src={"/rightarrow.png"} alt="brand-1" width={24} height={24}/>
//             </div>
//       </div>
//       <div className="flex justify-center items-center mx-[100px] mt-[40px] mb-[80px]">
//         <div className="reviews p-2"><Image src={"/review1.png"} alt="reviews" width={400} height={240}/></div>
//         <div className="reviews p-2"><Image src={"/review2.png"} alt="reviews" width={400} height={240}/></div>
//         <div className="reviews p-2"><Image src={"/review3.png"} alt="reviews" width={400} height={240}/></div>
//       </div>
//     </div>
//   )
// }

// export default Happycustomer

import Image from "next/image";

const Happycustomer = () => {
  return (
    <div className="px-4 lg:px-[100px]">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-xl md:text-2xl lg:text-[48px] font-bold mt-10">
          OUR HAPPY CUSTOMERS
        </div>
        <div className="arrow flex mt-4 lg:mt-0 gap-2">
          <Image
            src={"/leftarrow.png"}
            alt="left arrow"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/rightarrow.png"}
            alt="right arrow"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8 lg:mt-[40px] mb-8 lg:mb-[80px]">
        <div className="reviews p-2 w-full sm:w-[48%] lg:w-[30%]">
          <Image
            src={"/review1.png"}
            alt="review 1"
            width={400}
            height={240}
            className="w-full h-auto"
          />
        </div>
        <div className="reviews p-2 w-full sm:w-[48%] lg:w-[30%]">
          <Image
            src={"/review2.png"}
            alt="review 2"
            width={400}
            height={240}
            className="w-full h-auto"
          />
        </div>
        <div className="reviews p-2 w-full sm:w-[48%] lg:w-[30%]">
          <Image
            src={"/review3.png"}
            alt="review 3"
            width={400}
            height={240}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Happycustomer;
