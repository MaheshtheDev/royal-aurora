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
      <section className="flex flex-col justify-between h-32">
      <div className="w-full h-400 bg-blue-200">
      <h2 className="flex text-xl py-8 float-right text-[#22519F] font-semibold">
      <Image
          src="/products/aroMatic+.png"
          alt="AroMatic+"
          height={200}
          width={85}
          />
      </h2>
        <h2 className="float-left font-semibold pt-20 text-black">
          Everything you need to maintain a great home...<br></br>We have always been the best for giving our BEST RESULTS. <br></br>We are introducing multiple products with high performance and checmical-free and with high hygiene.<br></br>We ROYALAURORA proudly manufacturing our products in India.<br></br>
        </h2>
        <a  
          href="https://wa.me/+919505063030"
          className="bg-slate-500 text-white px-2 rounded-full mx-auto">
          <button>Order Now</button>
        </a>
        </div>
      </section>
  
      <div id="products" className="my-80 h-fit">
        <p className="uppercase text-lg font-semibold flex justify-center py-20 bg-[#B8D0EA]">
          Products
        </p>
        <Slider {...settings} className="mx-7">
          <section className="">
            <h2 className="flex justify-center text-xl py-2 text-[#22519F] font-semibold">
              <Image
                src="/products/logo.png"
                alt="AroMatic+"
                height={60}
                width={80}
              />
            </h2>
            <div className="bg-[#73A2D6]/50 px-3 py-2">
              <div className="flex py-2">
                <div className="image-column">
                  <Image
                    src="/products/aroMatic+.png"
                    alt="AroMatic+"
                    height={300}
                    width={120}
                  />
                </div>
                <div className="pl-5 flex flex-col justify-between">
                  <p className="text-xs">
                    ARO MATIC+ is a product with 10x concentration & with added
                    fabric conditioner.
                  </p>
                  <div className="flex-auto flex flex-wrap py-4 text-sm">
                    <button
                      className="h-8 px-2 mr-2 mb-2 font-medium rounded-md bg-[#283562] text-white"
                      type="button"
                      onClick={() => window.open("https://wa.me/+919505063030")}
                    >
                      Order Now
                    </button>
                    <button
                      className="h-8 px-2 font-medium rounded-md border border-[#283562] text-[#283562]"
                      type="button"
                    >
                      View Product
                    </button>
                  </div>
                  <div className="">
                    <div className="w-16 pt-1 flex justify-between">
                      <a href="https://wa.me/+919505063030">
                        <Image
                          src="/sm/whatsapp.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a
                        href="https://instagram.com/royalaurora_official"
                        target={"blank"}
                      >
                        <Image
                          src="/sm/instagram.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a href="https://wa.me/+919505063030">
                        <Image src="/sm/facebook.svg" height={15} width={15} />
                      </a>
                    </div>
                    <p className="text-xs text-[#000000]/40">
                      Share the Product with your family and friends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <h2 className="flex justify-center text-xl py-2 text-[#22519F] font-semibold">
              <Image
                src="/products/cibi-logo.png"
                alt="AroMatic+"
                height={60}
                width={130}
              />
            </h2>
            <div className="bg-[#FCCEE2]/50 px-3 py-2">
              <div className="flex py-2">
                <div className="image-column">
                  <Image
                    src="/products/CIBI.png"
                    alt="Cibi"
                    height={320}
                    width={175}
                  />
                </div>
                <div className="pl-5 flex flex-col justify-between">
                  <p className="text-xs">
                    Cibi Product is a Copper &amp; Brass metal cleaner with 10x
                    more cleaning power.
                  </p>
                  <div className="flex-auto flex py-4 flex-wrap text-sm">
                    <button
                      className="h-8 w-fit px-2 mr-2 mb-2 font-medium rounded-md bg-[#50000D]/80 text-white"
                      type="button"
                      onClick={() => window.open("https://wa.me/+919505063030")}
                    >
                      Order Now
                    </button>
                    <button
                      className="h-8 w-fit px-2 font-medium rounded-md border border-[#50000D]/80 text-[#50000D]/80"
                      type="button"
                    >
                      View Product
                    </button>
                  </div>
                  <div className="">
                    <div className="w-16 flex justify-between">
                      <a href="https://wa.me/+919505063030">
                        <Image
                          src="/sm/whatsapp.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a
                        href="https://instagram.com/royalaurora_official"
                        target={"blank"}
                      >
                        <Image
                          src="/sm/instagram.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a href="https://wa.me/+919505063030">
                        <Image src="/sm/facebook.svg" height={15} width={15} />
                      </a>
                    </div>
                    <p className="text-xs text-[#000000]/40">
                      Share the Product with your family and friends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slider>
        <div className="snap-x flex overflow-x-auto snap-start"></div>
        <div className="flex flex-grow justify-around"></div>
      </div>
      <section className="p-2 h-fit">
        <h2 className="uppercase font-semibold">
          For what application you are looking for the product??
        </h2>
        <Slider {...whatSettings} className="mx-7">
          <div className="flex flex-col justify-center text-center">
            <Image src="/products/Laundry.svg" height={190} width={200}></Image>
            <p className="text-lg font-medium">Laundry</p>
          </div>
          <div className="flex flex-col justify-center text-center py-3">
            <Image src="/products/image.png" height={190} width={200}></Image>
            <p className="text-lg font-medium">Brass, Copper Vessels</p>
          </div>
        </Slider>
      </section>
      <section className="bg-[#5193CF] text-white p-10 text-xl">
        <div className="flex flex-col space-y-30 font-bold pb-8 text-4xl"> let&apos;s keep<br></br>in touch</div>
          <div className="pb-8">
            <a href="https://wa.me/+919505063030">
              <Image
                src="/sm/whatsapp.svg"
                height={50}
                width={50}/>
            </a>
          </div>
          <div className="pb-8">
            <a
              href="https://instagram.com/royalaurora_official"
              target={"blank"}>
              <Image
                src="/sm/instagram.svg"
                height={50}
                width={50}/>
            </a>
          </div>
          <div className="pb-8">
            <a href="https://wa.me/+919505063030">
              <Image src="/sm/facebook.svg" height={50} width={50} />
            </a>
          </div>
            <p className="text-xl">
              Share the Product with your family and friends
            </p>
      </section>
    </main>
  );
};

export default Main;
