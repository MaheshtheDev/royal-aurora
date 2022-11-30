import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#5193CF] mt-4 p-2 text-white font-Montserrat justify-between text-xl">

      <div className="indent-6 p-5">
        <Image src="/logo_B.png " height={85} width={125} />
      </div>
      <div className="indent-10 pr-3">
        <div className="flex flex-col space-y-4 font-semibold pb-6">All Products</div>
        <ul>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Our Promise</li>
        </ul>
      </div>
    </footer>
  );
}
