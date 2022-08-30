import { NextPage } from "next";
import Image from "next/image";

import Slider from "react-slick";


const Main: NextPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
  };

  return (
    <main className="font-Montserrat mb-auto">
      <section className="flex flex-col justify-between h-32">
        <h2 className="text-center uppercase font-semibold pt-5">
          Everything you need to maintain a great home..
        </h2>
        <a
          href="https://wa.me/+919505063030"
          className="bg-slate-500 text-white px-2 rounded-full mx-auto"
        >
          <button>Order Now</button>
        </a>
      </section>
      <div id="products" className="my-10 h-fit">
        <p className="uppercase text-lg font-semibold flex justify-center py-2 bg-[#B8D0EA]">
          Products
        </p>
        <Slider {...settings}>
          <div className="scroll-ml-6 snap-start">
            <h2 className="flex justify-center text-xl py-2 text-[#22519F] font-semibold">
              Aro Matic +
            </h2>
            <div className="bg-[#73A2D6]/50 p-5">
              <div className="flex">
                <div className="image-column">
                  <Image
                    src="/products/aroMatic+.png"
                    alt="AroMatic+"
                    height={300}
                    width={120}
                  />
                </div>
                <div className="pl-10 flex flex-col justify-between">
                  <p className="text-base">
                    ARO MATIC+ is a product with 10x concentration & works on
                    both top load.
                  </p>
                  <a
                    href="https://wa.me/+919505063030"
                    className=" bg-white px-2 my-4 rounded-full w-fit"
                  >
                    <button>Order Now</button>
                  </a>
                  <div className="">
                    <div className="w-1/4 pt-1 flex justify-between">
                      <a href="https://wa.me/+919505063030">
                        <Image
                          src="/sm/whatsapp.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a href="https://wa.me/+919505063030">
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
          </div>
          <div className="scroll-ml-6 snap-start">
            <h2 className="flex justify-center text-xl py-2 text-[#22519F] font-semibold">
              <Image
                src="/products/cibi-logo.png"
                alt="AroMatic+"
                height={27}
                width={60}
              />
            </h2>
            <div className="bg-[#73A2D6]/50 p-5">
              <div className="flex">
                <div className="image-column">
                  <Image
                    src="/products/image.png"
                    alt="AroMatic+"
                    height={300}
                    width={250}
                  />
                </div>
                <div className="pl-10 flex flex-col justify-between">
                  <p className="text-base">
                    Cibi Product is a Finest Ingredients For Your Precious
                    Metals.
                  </p>
                  <a
                    href="https://wa.me/+919505063030"
                    className=" bg-white px-2 my-4 rounded-full w-fit"
                  >
                    <button>Order Now</button>
                  </a>
                  <div className="">
                    <div className="w-1/4 pt-1 flex justify-between">
                      <a href="https://wa.me/+919505063030">
                        <Image
                          src="/sm/whatsapp.svg"
                          height={15}
                          width={15}
                          className="py-1"
                        />
                      </a>
                      <a href="https://wa.me/+919505063030">
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
          </div>
        </Slider>
        <div className="snap-x flex overflow-x-auto snap-start"></div>
        <div className="flex flex-grow justify-around"></div>
      </div>
      <section className="p-2">
        <h2 className="uppercase font-semibold">
          For what application you are looking for the product ??
        </h2>
        <div className="flex flex-col justify-center text-center">
          <Image src="/products/Laundry.svg" height={190} width={200}></Image>
          <p className="text-lg font-medium">Laundry</p>
        </div>
      </section>
      <section className="h-fit">
        <Image
          src={"/certificates.svg"}
          height={40}
          width={100}
          layout="responsive"
          className="w-full"
        ></Image>
      </section>
    </main>
  );
};

export default Main;
