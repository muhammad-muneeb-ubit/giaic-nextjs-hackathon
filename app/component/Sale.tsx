import Image from "next/image"

const Sale = () => {
  return (
    <header className="w-full h-[48px] bg-black text-white flex content-center">
    <div className="flex justify-center items-center gap-[8px] w-[70%] ">
        <div className="">Sign up and get 20% off to your first order. </div>
        <div className="hover:cursor-pointer"><a href="#" className="underline">Sign Up Now</a></div>
    </div>
    <div className="w-[30%] flex content-end items-center hover:cursor-pointer"><Image src={"/cross.png"} width={20} height={20} alt="language"/></div>
</header>
  )
}

export default Sale
