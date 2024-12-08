import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-4 lg:px-[100px]">
      <div className="mt-8 flex flex-wrap lg:flex-nowrap pb-8">
        <div className="info w-full lg:w-[30%] mr-0 lg:mr-9 mb-8 lg:mb-0">
          <Image src={"/logo.png"} alt="logo" width={167} height={23} />
          <p className="mt-6 text-gray-400 text-sm">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          <Image
            className="mt-8"
            src={"/social.png"}
            alt="social links"
            width={148}
            height={28}
          />
        </div>

        <div className="w-full lg:w-[70%]">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left pb-2">Company</th>
                <th className="text-left pb-2">Help</th>
                <th className="text-left pb-2">FAQ</th>
                <th className="text-left pb-2">Resources</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-400">About</td>
                <td className="text-gray-400">Customer Support</td>
                <td className="text-gray-400">Account</td>
                <td className="text-gray-400">Free eBooks</td>
              </tr>
              <tr>
                <td className="text-gray-400">Features</td>
                <td className="text-gray-400">Delivery Details</td>
                <td className="text-gray-400">Manage Deliveries</td>
                <td className="text-gray-400">Development Tutorial</td>
              </tr>
              <tr>
                <td className="text-gray-400">Works</td>
                <td className="text-gray-400">Terms & Conditions</td>
                <td className="text-gray-400">Orders</td>
                <td className="text-gray-400">How to - Blog</td>
              </tr>
              <tr>
                <td className="text-gray-400">Career</td>
                <td className="text-gray-400">Privacy Policy</td>
                <td className="text-gray-400">Payments</td>
                <td className="text-gray-400">YouTube Playlist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="lower-footer flex flex-wrap justify-between items-center pt-6 pb-8 border-t border-gray-400">
        <div className="text-center lg:text-left w-full lg:w-auto mb-4 lg:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
        <div className="payments w-full lg:w-auto text-center">
          <Image
            src={"/payment.png"}
            alt="payment methods"
            width={281}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
