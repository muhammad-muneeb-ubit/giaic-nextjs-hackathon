
// import Image from "next/image";

// interface BrandProps {
//   name: string;
//   imageUrl: string;
//   invert: 0 |1;
  
// }

// const Brand: React.FC<BrandProps> = ({
//   name,
//   imageUrl,
//   invert,
  
// }) => {
//   return (
//     <div className="card-shadow text-start rounded bg-white flex flex-col cursor-pointer hover:scale-125  transition items-center p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[296px]">
//       <div className="w-full bg-white rounded-md flex justify-center">
//         <Image src={imageUrl} alt={name} width={150} height={150} className="max-w-full rounded-md" style={{ objectFit: "contain",  filter: invert === 1 ? 'invert(1)' : 'invert(0)',  transition: 'filter 0.3s ease', }} />
//       </div>
//       <div className="mt-4 md:mt-6 font-bold text-sm md:text-base lg:text-[13px] text-center">{name}</div>
      
//     </div>
//   );
// };

// export default Brand;

// components/Brand.tsx
import Image from "next/image";

interface BrandProps {
  name: string;
  imageUrl: string;
  invert: 0 | 1;
}

const Brand: React.FC<BrandProps> = ({ name, imageUrl, invert }) => {
  return (
    <div className="card-shadow text-start rounded bg-white flex flex-col cursor-pointer hover:scale-125 transition items-center p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[296px]">
      <div className="w-full bg-white rounded-md flex justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={150}
          height={150}
          className="max-w-full rounded-md"
          style={{
            objectFit: "contain",
            filter: invert === 1 ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease", // Smooth transition
          }}
        />
      </div>
      <div className="mt-4 md:mt-6 font-bold text-sm md:text-base lg:text-[13px] text-center">
        {name}
      </div>
    </div>
  );
};

export default Brand;
