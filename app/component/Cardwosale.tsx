
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
    <div className="card-shadow text-start rounded bg-white flex flex-col cursor-pointer hover:scale-125  transition items-center p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[296px]">
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
