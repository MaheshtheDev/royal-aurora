import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "#products",
    },
    {
      title: "About us",
      href: "#",
    },
    {
      title: "Contact us",
      href: "#footer",
    },
  ];

  return (
    <div>
      <header className="align-center flex justify-between pr-5 pt-2 pb-2 border-b-2">
        <Link href="/">
          <Image src="/logo.jpeg" alt="" width="180px" height="75px" />
        </Link>
        <nav className="md:hidden">
          {show ? (
            <Image
              src={"/close_big.svg"}
              alt="menu bar"
              width={30}
              height={70}
              className="md:invisible"
              onClick={handleShow}
            />
          ) : (
            <Image
              src={"/menu.svg"}
              alt="menu bar"
              width={30}
              height={70}
              className="md:invisible"
              onClick={handleShow}
            />
          )}

          {show && (
            <div className="absolute top-20 right-0 z-50 w-full rounded-sm bg-white p-5 shadow-xl">
              <div className="flex w-full flex-col items-center justify-center">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="font-Montserrat w-full cursor-pointer rounded-md p-2 text-lg font-medium hover:bg-[#8FBFEF] hover:font-semibold hover:tracking-wide"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
        <nav className="hidden list-none justify-center text-center font-medium uppercase md:flex">
          <a className="m-auto cursor-pointer px-2 hover:font-semibold hover:text-blue-700">
            Home
          </a>
          <a className="m-auto cursor-pointer px-2 hover:font-semibold hover:text-blue-700">
            Products
          </a>
          <a className="m-auto cursor-pointer px-2 hover:font-semibold hover:text-blue-700">
            About Us
          </a>
          <a className="m-auto cursor-pointer px-2 hover:font-semibold hover:text-blue-700">
            Contact us
          </a>
        </nav>
      </header>
    </div>
  );
}
