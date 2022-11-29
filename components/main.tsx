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
    <main className="font-Montserrat mb-auto bg-[#5193cf]">
      <div className="relative bg-[#5193cf]">
        <img
          src="/family3.png"
          height={350}
          width={500}
          className="absolute top-0 left-0"
        ></img>
        <img
          src="/products/aromatic+.png"
          height={50}
          width={100}
          className="cursor-pointer absolute top-0 left-16 mt-28 hover:shadow-outline"
        ></img>
        {/*<img src="/products/aromatic+.png" alt="" />*/}
      </div>
      <div className="text-white mt-72 float-right pr-3">
        <h1 className="font-bold w-56 float-right pb-3">
          EVERYTHING YOU NEED TO MAINTAIN A GREAT HOME.
        </h1>
        <p className="w-full float-right pl-3">
          We are introducing multiple products with high performance and
          chemical-free and with high hygiene. We ROYALAURORA proudly
          manufacturing our products in India.
        </p>
        {/*<button className="rounded">Discover Our Products</button>*/}
      </div>
    </main>
  );
};

export default Main;
