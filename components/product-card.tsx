import { Product } from "../types/product";

export default function ProductCard(props: { productDetails: Product }) {
  return (
    <div className="flex flex-row border-2 border-[#D1D6EC] rounded-lg">
      <div className="text-center p-5">
        <img src="/logo.jpeg" height={75} width={150} className="" />
      </div>
      <div className="bg-[#B9D0EB] relative w-fit pl-2 pr-4 py-2">
        <h3 className="uppercase font-semibold text-primary">
          {props.productDetails.name}
        </h3>
        <div className="text-sm">{props.productDetails.description}</div>
        <a className="underline text-[#000000]/50 text-xs">know more</a>
        <div className="py-1 font-medium"></div>
        <div >Rs: {props.productDetails.price}/-</div>
        <div className="bg-[#D9D9D9] rounded-md border-[1px] border-[#335DA7] justify-center flex">
          Order Now
        </div>
      </div>
    </div>
  );
}
