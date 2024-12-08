import { CgShoppingCart } from "react-icons/cg";
import Sale from "../component/Sale";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
       < Sale />
       < Navbar />
       <div className="h-[70vh] w-full bg-white flex flex-col justify-center items-center gap-6">
             <CgShoppingCart size={"100px"} />
            Your shopping cart is empty.
            <Link href={"/"}>
                <button className="bg-black text-white px-3 py-2 rounded-full">Shop more</button>
            </Link>
       </div>
       < Newsletter />
       < Footer />
    </div>
  )
}

export default page
