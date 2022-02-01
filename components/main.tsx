import { NextPage } from "next";
import { Product } from "../types/product";
import ProductCard from "./product-card";

const Main: NextPage = () => {
    return <main className="font-Montserrat px-5">
        <div className="flex justify-between">
            <div className=" pl-5 text-2xl md:text-4xl md:pb-5 md:pl-20 md:pt-8">
                Building <div className="font-extrabold uppercase text-[#474BBA]">Futuristic</div> Products
            </div>
            <img src="/onlineshop.svg" className="pr-10 md:w-fit w-64"/>
        </div>
        <div className="mt-10">
            <p className="uppercase md:text-xl text-lg font-semibold mb-5 pl-5">Products</p>
            <div className="flex flex-grow justify-around">
                <ProductCard productDetails={{name: "PureX", description: "Hand Wash", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Winclean", description: "Dish Washer", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Aromatic+", description: "Detergent liquid", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Flash", description: "Floor cleaner gel", price: 1000} as Product}/>
            </div>
            <div className="flex flex-grow justify-around pt-10">
                <ProductCard productDetails={{name: "CB Cover", description: "Brass, copper metal cleaner", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Magic pro clean", description: "Toilet cleaner", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Magic Acid", description: "Acid", price: 1000} as Product}/>
                <ProductCard productDetails={{name: "Magic perfumes phenyl", description: "Phenyl", price: 1000} as Product}/>
            </div>
        </div>
    </main>
}

export default Main;