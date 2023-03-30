import Image from "next/image";
import Link from "next/link";
import sticker from "../images/sale.png";
import CartButton from "./CartButton";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

export default async function DealOfTheDay() {
  const item = await fetchData(
    process.env.NEXT_PUBLIC_API_URL + "?populate=*&filters[id][$in][0]=9"
  );

  return (
    <section className="lg:w-[70%] w-[90%] max-w-[1800px] md:w-[90%] m-auto mb-20">
      <Link href="/view-all/9" as={`/view-all/9`}>
        <h1 className="md:text-[2rem] text-[1.5rem] text-black font-work font-[500] text-center mb-5">
          Offerta del giorno
        </h1>
        <div className="md:flex md:flex-row flex flex-col justify-between gap-3 bg-background">
          <div className="w-[100%] flex flex-col justify-between p-10">
            <p className="md:text-[2rem] text-[1rem] font-work">
              {item.data[0].attributes.title}
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-red-600 font-bold text-[30px]">
                €{item.data[0].attributes.price}
              </p>
              <p className="text-[20px] text-gray-500">
                <s>€37.99</s>
              </p>
            </div>
            <p className=" w-[100%] text-[15px] mt-5">
              {item.data[0].attributes.desc}
            </p>

            <button className="mt-5 flex w-[50%] m-auto bg-button text-buttontext p-3 gap-3 justify-center items-center border-[2px] border-button hover:ease-in hover:border-[2px] hover:border-button hover:bg-buttontext hover:text-button">
              Vedi
            </button>
          </div>

          <div className="w-[100%] h-[100vw] md:h-[40vw] relative">
            <Image
              src={item.data[0].attributes.img.data.attributes.url}
              width="600"
              height="600"
              className="absolute w-[100%] h-[100%]"
              alt={item.data[0].attributes.title}
            ></Image>
            <div className="right-6 top-5 w-[100px] h-[100px] absolute z-10">
              <div className="relative h-full">
                <Image
                  src={sticker}
                  width="500"
                  height="500"
                  className="absolute"
                  alt="/"
                ></Image>
                <div className="relative text-center flex flex-col w-[50%] m-auto justify-center h-full rotate-6">
                  <p className="z-12 w-full text-center my-auto font-bold leading-tight">
                    Save
                    <span className="text-[23px] text-red-600 font-extrabold">
                      {" "}
                      20%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
