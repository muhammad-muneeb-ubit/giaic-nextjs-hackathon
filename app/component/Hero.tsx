
const Hero = () => {
  return (
    <div
      className="px-4 lg:px-[100px] bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-center"
      style={{ backgroundImage: "url('/Rectangle.png')" }}
    >
      <div className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-black leading-[1.2] lg:leading-[1.1] max-w-full lg:max-w-[577px] mb-6">
        FIND CLOTHES THAT MATCH YOUR STYLE
      </div>

      <div className="text-sm sm:text-base md:text-lg lg:text-[16px] leading-relaxed max-w-full lg:max-w-[545px] mb-8">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </div>

      <button className="w-full sm:w-[212px] h-[52px] bg-black text-white rounded-full py-[12px] px-[16px] text-center">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
