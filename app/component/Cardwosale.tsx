// import Image from "next/image";
// interface CardwosaleProps {
//     name: string;
//     clothimageUrl: string;
//     price: string | number;
//     ratingimageUrl: string;
//   }

//   const Cardwosale: React.FC<CardwosaleProps> =  ({ name, clothimageUrl, price, ratingimageUrl}) => {
//   return (
//     <div className="w-[296px] h-[444px] card-shadow text-start rounded bg-white flex justify-center items-start pl-[30px] flex-col">
//       <div className="w-[100%] bg-white rounded-md ">
//         <Image
//           className=""
//           src={clothimageUrl}
//           alt={name}
//           width={10}
//           height={10}
//           style={{ width: "80%" }}
//         />
//       </div>
//       <div className="mt-[30px] font-bold text-[13px]">{name}</div>
//       <div>
//         <Image src={ratingimageUrl} alt="rating" width={150} height={19} />
//       </div>
//         <div className="w-[55px] h-[32px] font-bold">{price}</div>
//     </div>
//   );
// };

// export default Cardwosale;


import Image from "next/image";

interface CardwosaleProps {
  name: string;
  clothimageUrl: string;
  price: string | number;
  ratingimageUrl: string;
}

const Cardwosale: React.FC<CardwosaleProps> = ({
  name,
  clothimageUrl,
  price,
  ratingimageUrl,
}) => {
  return (
    <div className="card-shadow text-start rounded bg-white flex flex-col items-center p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[296px]">
      <div className="w-full bg-white rounded-md flex justify-center">
        <Image
          src={clothimageUrl}
          alt={name}
          width={150} // Use fixed dimensions for better scaling
          height={150}
          className="max-w-full rounded-md"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="mt-4 md:mt-6 font-bold text-sm md:text-base lg:text-[13px] text-center">
        {name}
      </div>
      <div className="mt-2">
        <Image
          src={ratingimageUrl}
          alt="rating"
          width={120}
          height={24}
          className="max-w-full"
        />
      </div>
      <div className="mt-3 text-lg md:text-xl font-bold text-gray-700">
        {price}
      </div>
    </div>
  );
};

export default Cardwosale;
