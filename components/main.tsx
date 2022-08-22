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
        <button className="bg-slate-500 text-white px-2 rounded-full mx-auto">
          Order Now
        </button>
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
                <button className=" bg-white px-2 rounded-full">
                  Order Now
                </button>
                <div className="w-1/4 py-2 flex justify-between">
                  <a href="https://wa.me/+919505063030">
                    <Image
                      src="/sm/whatsapp.svg"
                      height={15}
                      width={15}
                      className="py-2"
                    />
                  </a>
                  <Image
                    src="/sm/instagram.svg"
                    height={15}
                    width={15}
                    className="py-2"
                  />
                  <Image src="/sm/facebook.svg" height={15} width={15} />
                </div>
                <p className="text-xs text-[#000000]/40">
                  Share the Product with your family and friends
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-grow justify-around"></div>
        <div className="hidden flex-grow justify-around pt-10">
          <ProductCard
            productDetails={
              {
                name: "CB Cover",
                description: "Brass, copper metal cleaner",
                price: 1000,
              } as Product
            }
          />
          <ProductCard
            productDetails={
              {
                name: "Magic pro clean",
                description: "Toilet cleaner",
                price: 1000,
              } as Product
            }
          />
          <ProductCard
            productDetails={
              {
                name: "Magic Acid",
                description: "Acid",
                price: 1000,
              } as Product
            }
          />
          <ProductCard
            productDetails={
              {
                name: "Magic perfumes phenyl",
                description: "Phenyl",
                price: 1000,
              } as Product
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
