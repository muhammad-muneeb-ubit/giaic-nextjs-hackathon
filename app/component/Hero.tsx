import Image from "next/image"

const Hero = () => {
  return (
    <div className="mx-[100px]  bg-contain bg-no-repeat bg-center h-screen "
    style={{ backgroundImage: "url('/Rectangle.png')" }}>
        <div className="text-[64px] pt-[100px] font-black w-[577px] h-[173px] leading-[55px]" >FIND CLOTHES THAT MATCHES YOUR STYLE</div>
        <div className="text-[16px] pt-[100px] py-[32px] w-[545px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
        <button className="w-[212px] h-[52px] bg-black text-white rounded-full py-[12px] px-[16px]">Shop Now</button>
      </div>
  )
}

export default Hero
