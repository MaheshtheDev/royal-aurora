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

const Main: NextPage = () => {
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
    <main>
      <section className="flex flex-col justify-between">
      <div className="w-full h-400 bg-[#5193CF]">
      <h2 className="flex text-xl text-[#22519F] font-semibold">
      <Image
          src="/products/homeframe.png"
          alt="AroMatic+"
          height={300}
          width={420}
      />
      </h2>
      <h2 className="">
      <img
          src="/products/aroMatic+.png"
          alt="AroMatic+"
          height={180}
          width={80}
          className="cursor-pointer absolute top-60 left-16 hover:shadow:outline"></img>
        </h2>
        <div className="pb-2 py-2">
        <h2 className="float-right pr-9 font-bold text-white text-align font-Montserrat">
          ONE STOP DESTINATION
        </h2>
        <h2 className="float-right pr-12 font-bold text-black text-align font-Montserrat">
          FOR ALL<br></br>CLEANING PRODUCTS!!
        </h2>
        </div>
        <div className="text-white pt-20 pb-4 pl-6 text-align font-Montserrat">
        <h2>We are introducing multiple products with <br></br>high performance and chemical-free and <br></br>with high hygiene. We <b>ROYALAURORA</b> <br></br>proudly manufacturing our products in INDIA.</h2>
        </div>
        <div className="text-center pb-6">
        <a href="https://wa.me/+919505063030">
          <button className="bg-white text-2xl font-semibold font-Monsterrat text-[#5193CF] px-4 rounded-md">Order Now</button>
        </a>
        </div>
        </div>
      </section>
      <div><br></br></div>
      <section>
      <div className="indent-20 font-bold text-3xl font-Montserrat text-black">True and</div>
      <div className="indent-32 font-bold text-3xl font-Montserrat text-[#5193CF]">Trustworthy</div>
      <br></br>
      <div className="pb-8 indent-8">
        <Image src="/products/aroframe.png" alt="aroframe" height={450} width={350}></Image>
      </div>
      <div className="indent-8">
        <Image src="/products/cibiframe1.png" alt="cibiframe" height={450} width={350}></Image>
      </div>
        <div className="p-10 indent-16">
          <button className="h-10 px-2 text-lg font-bold rounded-md bg-[#5193CF] text-white" type="button"
            onClick={() => window.open("#products")}>Discover Our Products
          </button>
        </div>
      </section>
      <section className="p-4 h-fit">
        <h2 className="uppercase font-semibold text-xl font-Montserrat text-[#5193CF]">
          For what application you are looking for the product??
        </h2>
        <div className="pb-8"></div>
        <Slider {...whatSettings} className="mx-7">
          <div className="flex flex-col justify-center text-center">
            <a href="#products">
             <Image src="/products/Laundry.svg" alt="laundry" height={250} width={260}></Image>
            </a>
            <p className="text-lg font-medium">Laundry</p>
          </div>
          <div className="flex flex-col justify-center text-center py-3">
            <a href="#products">
              <Image src="/products/image.png" alt="image" height={250} width={260}></Image>
            </a>
            <p className="text-lg font-medium">Brass, Copper Vessels</p>
          </div>
        </Slider>
      </section>
      <div className="pb-10"></div>
      <div className="indent-32">
      <button className="h-10 px-6 mr-2 mb-2 text-lg font-bold rounded-md bg-[#5193CF] text-white" type="button"
        onClick={() => window.open("#products")}>Discover More
      </button>
      </div>
      <div className="pb-6"></div>
      <section className="bg-[#5193CF] text-white p-10 text-xl">
        <div className="flex flex-col space-y-30 font-bold pb-8 text-4xl"> let&apos;s keep<br></br>in touch</div>
          <div className="pb-5 indent-5">
            <a href="https://wa.me/+919505063030">
              <Image
                src="/products/whatsapp.png"
                height={78}
                width={78}/>
            </a>
          </div>
          <div className="pb-7 indent-10">
            <a
              href="https://instagram.com/royalaurora_official"
              target={"blank"}>
              <Image
                src="/products/instagram.png"
                height={40}
                width={40}/>
            </a>
          </div>
            <p className="text-xl">
              Share the Product with your family and friends
            </p>
      </section>
    <div className="pb-8"></div>
    </main>
  );
};

export default Main;
