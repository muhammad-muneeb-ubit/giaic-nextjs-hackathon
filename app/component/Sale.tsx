import Image from "next/image";

const Sale = () => {
  return (
    <header className="w-full h-[48px] bg-black text-white flex justify-between items-center px-4 md:px-[100px]">
      <div className="flex justify-center items-center gap-[8px] w-full md:w-[70%] text-sm md:text-base">
        <div>Sign up and get 20% off your first order.</div>
        <div className="hover:cursor-pointer">
          <a href="#" className="underline">Sign Up Now</a>
        </div>
      </div>
      <div className="w-[30%] flex justify-center items-center hover:cursor-pointer md:px-[170px]">
        <Image src={"/cross.png"} width={16} height={16} alt="close" />
      </div>
    </header>
  );
};

export default Sale;
