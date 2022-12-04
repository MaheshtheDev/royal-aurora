import { NextPage } from "next";
import Image from "next/image";

import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#335DA7",
        borderRadius: "16px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#335DA7",
        borderRadius: "16px",
      }}
      onClick={onClick}
    />
  );
}

const Productspage: NextPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  var whatSettings = {
    dots: true,
    infinite: true,
    speed: 10,
    arrows: true,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <section>
      <section className="flex flex-col justify-between text-center">
      <div className="w-full h-400 bg-white">
      <h2 className="flex text-xl text-[#22519F] font-semibold">
      </h2>
      <section className="h-fit">
        <div className="pb-2"></div>
        <div className="pb-8">  
       {/*} <Slider {...whatSettings} className="mx-7">
          <div className="flex flex-col justify-center">
             <Image src="/products/homeframe.png" alt="homeframe" height={400} width={500}></Image>
          </div>
          <div className="flex flex-col justify-center">
              <Image src="/products/16.png" alt="16" height={400} width={500}></Image>
          </div>
  </Slider>*/}
        </div>
      </section>
      <section className="">
        <div className="py-0">
        <h2 className="font-bold text-black text-align text-xl font-Montserrat">
          OUR PRODUCTS!!
        </h2>
        </div>
      </section>
        </div>
      </section>
      <div><br></br></div>

      <section>
      <div className="text-center">
        <Image src="/products/aroMatic+.png" alt="aro" height={320} width={150}></Image>
      </div>
      <div className="text-center font-bold text-2xl font-Montserrat text-[#5193CF]">AroMatic+</div>
      <div className="pb-2 pl-6 px-6 py-2 font-semibold font-Montserrat text-justify text-black">AroMatic+ is 10x concentrated when compared to Normal detergent liquid. It works in all washing machines & cleans effectively iin all temperatures. The added fabric conditioner gives you long lasting fragrance. It is very gentle on skin and hands.</div>
      <div className="p-4 text-center">
          <button className="h-10 px-4 text-lg font-semibold rounded-md bg-[#5193CF] text-white" type="button"
            onClick={() => window.open("#products")}>Explore More
          </button>
        </div>
      <br></br>
      <div className="text-center">
        <Image src="/products/CIBI.png" alt="cibi" height={300} width={180}></Image>
      </div>
      <div className="text-center font-bold text-3xl font-Montserrat text-[#5193CF]">Cibi</div>
      <div className="pb-2 pl-6 py-2 px-6 font-semibold font-Montserrat text-justify text-black">Cibi is a copper, brass & metal cleaner. It gives your metal long-lassting shine & protection. It's formulation is ideal to remove tarnish and restore natural color & shine. It is very safe for hand & skin.</div>
      <div className="p-4 text-center">
          <button className="h-10 px-4 text-lg font-semibold rounded-md bg-[#5193CF] text-white" type="button"
            onClick={() => window.open("#products")}>Explore More
          </button>
        </div>
      <br></br>
      </section>
      <section className="bg-[#5193CF] text-white p-10 text-xl text-center">
        <div className="flex flex-col space-y-30 font-bold pb-8 text-4xl"> let&apos;s keep<br></br>in touch</div>
        <div className="">
            <a href="tel:+91-9505063030">
              <Image
                src="/products/call.png" alt="call"
                height={90}
                width={90}/>
            </a>
          </div>
          <div className="pb-5">
            <a href="whatsapp://send?text=https://www.royalaurora.com/">
              <Image
                src="/products/whatsapp.png" alt="whatsapp"
                height={78}
                width={78}/>
            </a>
          </div>
          <div className="pb-7">
            <a
              href="https://instagram.com/royalaurora_official"
              target={"blank"}>
              <Image
                src="/products/instagram.png" alt="instagram"
                height={40}
                width={40}/>
            </a>
          </div>
            <p className="text-xl">
              Share the Product with your family and friends
            </p>
      </section>  
    </section>

  );
};

export default Productspage;