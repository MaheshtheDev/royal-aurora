import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#5193CF] mt-4 p-8 text-white font-Montserrat justify-between">
      <div className="p-5 pb-8">
        <Image src="/logo_B.png" alt="secondlogo" height={85} width={125}/>
      </div>
      <div className="indent-5">
        <div className="flex flex-col space-y-4 font-semibold font-Montserrat pb-8 text-xl"><a href="/">All Products</a></div>
        <div className="flex flex-col space-y-4 pb-4 text-s">FAQs</div>
        <div className="flex flex-col space-y-4 pb-4 text-s"><a href="#Contact us">Contact Us</a></div>
        <div className="flex flex-col space-y-4 pb-8 text-s">Our Promise</div>
      </div>
    </footer>
  );
}
