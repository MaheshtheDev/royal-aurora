import { NextPage } from "next";
import { Product } from "../types/product";
import ProductCard from "./product-card";

const Main: NextPage = () => {
    return (
      <main className="font-Montserrat px-5 mb-auto">
        <div id="products" className="mt-10">
          <p className="uppercase text-lg font-semibold underline flex justify-center text-primary pb-2">
            Products
          </p>
          <div className="flex flex-grow justify-around">
            <ProductCard
              productDetails={
                {
                  name: "Aro Matic+",
                  description: "Detergent liquid",
                  price: 225,
                } as Product
              }
            />
          </div>
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
}

export default Main;