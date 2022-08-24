import { NextPage } from "next";
import Image from "next/image";

import { Product } from "../types/product";
import ProductCard from "./product-card";

const Main: NextPage = () => {
  return (
    <main className="font-Montserrat mb-auto">
      <section className="flex flex-col justify-between h-32">
        <h2 className="text-center uppercase font-semibold pt-5">
          Everything you need to maintain a great home..
        </h2>
        <a
          href="https://wa.me/+919505063030"
          className="bg-slate-500 text-white px-2 rounded-full mx-auto"
        >
          <button>Order Now</button>
        </a>
      </section>
      <div id="products" className="mt-10">
        <p className="uppercase text-lg font-semibold flex justify-center py-2 bg-[#B8D0EA]">
          Products
        </p>
        <section className="">
          <h2 className="flex justify-center text-xl py-2 text-[#22519F] font-semibold">
            Aro Matic +
          </h2>
          <div className="bg-[#73A2D6]/50 p-5">
            <div className="image-column">
              <Image
                src="/products/comparsion.svg"
                alt="comparsion"
                height={113}
                width={200}
              />
            </div>
            <p className="text-xs">
              ARO MATIC+ is a product with 10x concentration & works on both top
              load and front load washing machines & is gentle for skin &
              clothes and added fabric conditioner with long lasting fragrance.
            </p>
            <div className="flex">
              <Image
                src={"/washing-mach.svg"}
                alt="washing machin"
                height={86}
                width={126}
              />
              <div className="p-4">
                <a
                  href="https://wa.me/+919505063030"
                  className=" bg-white px-2 rounded-full"
                >
                  <button>Order Now</button>
                </a>
                <div className="w-1/4 pt-1 flex justify-between">
                  <a href="https://wa.me/+919505063030">
                    <Image
                      src="/sm/whatsapp.svg"
                      height={15}
                      width={15}
                      className="py-2"
                    />
                  </a>
                  <a href="https://wa.me/+919505063030">
                    <Image
                      src="/sm/instagram.svg"
                      height={15}
                      width={15}
                      className="py-2"
                    />
                  </a>
                  <a href="https://wa.me/+919505063030">
                    <Image src="/sm/facebook.svg" height={15} width={15} />
                  </a>
                </div>
                <p className="text-xs text-[#000000]/40">
                  Share the Product with your family and friends
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-grow justify-around"></div>
      </div>
      <section className="p-2">
        <h2 className="uppercase font-semibold">
          For what application you are looking for the product ??
        </h2>
        <div className="flex flex-col justify-center text-center">
          <Image src="/products/Laundry.svg" height={190} width={200}></Image>
          <p className="text-lg font-medium">Laundry</p>
        </div>
      </section>
      <section className="h-fit">
        <Image src={"/certificates.svg"} height={40} width={100} layout="responsive" className="w-full"></Image>
      </section>
    </main>
  );
};

export default Main;
