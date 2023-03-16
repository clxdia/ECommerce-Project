import Image from "next/image";
import "../styles/globals.css";
import Footer from "../ui/Footer";
import HeaderComponent from "../ui/HeaderComponent";
import bannerMB from "../images/banner.png";
import banner from "../images/banner.png";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <HeaderComponent />
        <div className="md:pt-[10rem] pt-[5rem] ">{children}</div>
        <Image src={bannerMB} alt="/" className=" md:hidden mt-10" />
        <Image src={banner} alt="/" className=" md:block hidden mt-10" />
        <Footer />
      </body>
    </html>
  );
}
