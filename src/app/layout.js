import Image from "next/image";
import "../styles/globals.css";
import Footer from "../ui/Footer";
import HeaderComponent from "../ui/HeaderComponent";
import bannerMB from "../images/mobile/bannerMB.png";
import banner from "../images/desktop/banner.png";
import NavMB from "../ui/NavMB";
import { Providers } from "./provider";
import { CartProvider } from "./CartContext";

export const metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <CartProvider>
          <Providers>
            <HeaderComponent />
            <NavMB />
            <div className="md:pt-0 pt-[5rem] max-w-[2000px] m-auto">
              {children}
            </div>
            <Image src={bannerMB} alt="/" className="md:hidden mt-10" />
            <Image src={banner} alt="/" className="md:block hidden mt-10" />
            <Footer />
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
