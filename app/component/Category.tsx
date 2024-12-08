// import Image from "next/image"

// const Category = () => {
//   return (
//     <div className="w-[1239px] h-[866px]">
//       <h1 className="text-center font-bold text-[48px] py-[70px]">BROWSE BY DRESS STYLE</h1>
//       <div className="flex flex-wrap ">
//         <div className="card-shadow w-[407px] h-[289px] rounded-lg m-2 pb-[90px] overflow-hidden " style={{backgroundColor:"#fbfbfd",}}><span className=" relative top-[60px] left-[30px] text-[36px] font-bold">Casual</span><Image className="object-cover" src={"/categor1.png"} alt="categories" width={10} height={10} style={{width:"100%", height:"120%", }}/></div>
//         <div className="card-shadow w-[684px] h-[289px] rounded-lg m-2 pb-[90px] overflow-hidden " style={{backgroundColor:"#fbfbfd",}}><span className=" relative top-[60px] left-[30px] text-[36px] font-bold">Formal</span><Image className="object-cover" src={"/categor2.png"} alt="categories" width={10} height={10} style={{width:"100%", height:"120%", }}/></div>
//         <div className="card-shadow w-[684px] h-[289px] rounded-lg m-2 pb-[90px] overflow-hidden " style={{backgroundColor:"#fbfbfd",}}><span className=" relative top-[60px] left-[30px] text-[36px] font-bold">Party</span><Image className="object-cover" src={"/categor3.png"} alt="categories" width={10} height={10} style={{width:"100%",height:"120%", }}/></div>
//         <div className="card-shadow w-[407px] h-[289px] rounded-lg m-2 pb-[90px] overflow-hidden " style={{backgroundColor:"#fbfbfd",}}><span className=" relative top-[60px] left-[30px] text-[36px] font-bold">Gym</span><Image className="object-cover" src={"/categor4.png"} alt="categories" width={10} height={10} style={{width:"100%",height:"120%", }}/></div>
//       </div>
//     </div>
//   )
// }

// export default Category


import Image from "next/image";

const Category = () => {
  return (
    <div className="w-full max-w-[1239px] mx-auto">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-[48px] py-6 md:py-[70px]">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="card-shadow w-full sm:w-[48%] lg:w-[407px] h-auto rounded-lg pb-4 sm:pb-8 overflow-hidden"
          style={{ backgroundColor: "#fbfbfd" }}
        >
          <span className="relative top-6 left-4 text-lg md:text-2xl lg:text-[36px] font-bold">
            Casual
          </span>
          <Image
            className="object-cover"
            src={"/cat1.png"}
            alt="categories"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          className="card-shadow w-full sm:w-[48%] lg:w-[684px] h-auto rounded-lg pb-4 sm:pb-8 overflow-hidden"
          style={{ backgroundColor: "#fbfbfd" }}
        >
          <span className="relative top-6 left-4 text-lg md:text-2xl lg:text-[36px] font-bold">
            Formal
          </span>
          <Image
            className="object-cover"
            src={"/categor2.png"}
            alt="categories"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          className="card-shadow w-full sm:w-[48%] lg:w-[684px] h-auto rounded-lg pb-4 sm:pb-8 overflow-hidden"
          style={{ backgroundColor: "#fbfbfd" }}
        >
          <span className="relative top-6 left-4 text-lg md:text-2xl lg:text-[36px] font-bold">
            Party
          </span>
          <Image
            className="object-cover"
            src={"/categor3.png"}
            alt="categories"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          className="card-shadow w-full sm:w-[48%] lg:w-[407px] h-auto rounded-lg pb-4 sm:pb-8 overflow-hidden"
          style={{ backgroundColor: "#fbfbfd" }}
        >
          <span className="relative top-6 left-4 text-lg md:text-2xl lg:text-[36px] font-bold">
            Gym
          </span>
          <Image
            className="object-cover"
            src={"/categor4.png"}
            alt="categories"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
