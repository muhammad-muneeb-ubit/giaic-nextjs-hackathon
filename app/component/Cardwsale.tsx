import Image from "next/image";

interface CardwsaleProps {
  name: string;
  clothimageUrl: string;
  price: string | number;
  ratingimageUrl: string;
  removeprice: string;
  off: string;
}

const Cardwsale: React.FC<CardwsaleProps> = ({
  name,
  clothimageUrl,
  price,
  ratingimageUrl,
  removeprice,
  off,
}) => {
  return (
    <div className="cursor-pointer hover:scale-125  transition card-shadow text-start rounded bg-white flex flex-col items-center  p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[296px]">
      <div className="w-full bg-white rounded-md flex justify-center">
        <Image
          src={clothimageUrl}
          alt={name}
          width={150} 
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
      <div className="flex flex-wrap gap-2 mt-3 items-center justify-center">
        <div className="text-lg md:text-xl font-bold text-gray-700">{price}</div>
        <div className="text-base md:text-lg font-bold text-gray-500 line-through">
          {removeprice}
        </div>
        <div className="text-sm md:text-base rounded-full text-center text-red-600 bg-red-400 px-2 py-1">
          {off}
        </div>
      </div>
    </div>
  );
};

export default Cardwsale;
