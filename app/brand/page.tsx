// import Sale from "../component/Sale";
// import Navbar from "../component/Navbar";
// import Brand from "../component/Brand";
// import Newsletter from "../component/Newsletter";
// import Footer from "../component/Footer";

// const page = () => {
//   return (
//     <div>
//         < Sale />
//         < Navbar />
//     <div>
//     <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center mt-16">
//         <Brand  imageUrl={"/br1.png"} invert={0} name={"Versace"} />
//         <Brand  imageUrl={"/br2.png"} invert={0} name={"Zara"} />
//         <Brand  imageUrl={"/br3.png"} invert={0} name={"Gucci"} />
//         <Brand  imageUrl={"/br4.png"} invert={0} name={"Prada"} />
//         <Brand  imageUrl={"/br5.png"} invert={0} name={"Calvin Klein"} />
//         <Brand  imageUrl={"/br6.jpeg"} invert={1} name={"Adidas"} />
//         <Brand  imageUrl={"/br7.jpeg"} invert={1} name={"Louis Vuitton"} />
//         <Brand  imageUrl={"/br8.jpeg"} invert={1} name={"Puma"} />
//     </div>
     
//     </div>
//        < Newsletter />
//        < Footer />
//     </div>
//   )
// }

// export default page


// pages/index.tsx or pages/[yourPage].tsx
import Sale from "../component/Sale";
import Navbar from "../component/Navbar";
import Brand from "../component/Brand"; // Ensure this import points to the correct path
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const Page = () => {
  return (
    <div>
      <Sale />
      <Navbar />
      <div>
        <div className="flex flex-wrap gap-[10px] mx-[20px] md:mx-[100px] justify-center mt-16">
          <Brand imageUrl={"/br1.png"} invert={1} name={"Versace"} />
          <Brand imageUrl={"/br2.png"} invert={1} name={"Zara"} />
          <Brand imageUrl={"/br3.png"} invert={1} name={"Gucci"} />
          <Brand imageUrl={"/br4.png"} invert={1} name={"Prada"} />
          <Brand imageUrl={"/br5.png"} invert={1} name={"Calvin Klein"} />
          <Brand imageUrl={"/br6.jpeg"} invert={0} name={"Adidas"} />
          <Brand imageUrl={"/br7.jpeg"} invert={0} name={"Louis Vuitton"} />
          <Brand imageUrl={"/br8.jpeg"} invert={0} name={"Puma"} />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
