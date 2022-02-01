import { NextPage } from "next";
import Image from "next/image";


const Layout: NextPage = () => {
    return (
        <header className="p-5 flex justify-between font-Montserrat">
            <Image src="/logo.jpeg" height={75} width={150}/>
            <nav className="justify-evenly w-1/3 font-medium p-2 hidden md:flex">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </nav>
        </header>
    )
}

export default Layout