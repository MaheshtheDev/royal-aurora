import { Product } from "../types/product";

export default function ProductCard(props: {productDetails : Product}) {
    return <div className="w-60 h-72 bg-[#4B90CF] rounded-lg" >
        <div className="h-44 text-center pt-5 pl-5">
            <img src="/logo.jpeg" height={75} width={150} className="pt-10 pl-10"/>
        </div>
        <div className="bg-[#8BB7E0] h-28 rounded-lg relative">
            <h3 className="px-2 pt-1 uppercase font-medium">{props.productDetails.name}</h3>
            <div className="text-sm px-2 pt-1">{props.productDetails.description}</div>
            <div className="flex justify-between w-full absolute bottom-0 pb-2 px-2">
                <a href="https://wa.me/+919505063030" target={"_blank"} className="rounded-full bg-[#D2F400] w-28 px-2 cursor-pointer">Contact us</a>
                <div>Rs: {props.productDetails.price}/-</div>
            </div>
        </div>
    </div>
}