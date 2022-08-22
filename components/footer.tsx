import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-fit flex bg-[#D1D6EC] mt-4 p-2 font-Montserrat justify-between"
    >
      <div className="p-2">
        <Image src="/logoA.png" height={75} width={125} />
      </div>
      <div className="pr-2">
        <div className="text-primary font-semibold pb-2">Contact us</div>
        <div className="font-medium text-xs">Ph: +91-9505063030</div>
        <div className="font-medium pb-4 text-xs">
          Mail to: info@royalaurora.com
        </div>
      </div>
    </footer>
  );
}
