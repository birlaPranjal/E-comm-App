import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".text", {
      y: 200,
      delay: 0.7,
      opacity: 0,
    });

    gsap.from(".dots", {
      opacity: 0.3,
      repeat: -1,
      delay: 0.3,
    });
    gsap.from(".e-com", {
      opacity: 0.7,
      repeat: -1,
      delay: 0.2,
    });
    gsap.from(".img",{
      opacity: 0,
      x:-300,
      yoyo: true,
      scrollTrigger:{
        start: "30% center",
        end: "45% 60%",
        scrub:2
      }
    })
    gsap.from(".imgTxt",{
      opacity: 0,
      yoyo: true,
      scrollTrigger:{
        start: "30% center",
        end: "45% 60%",
        scrub:2
      }
    })
    gsap.from(".items4",{
      opacity: 0,
      stagger:.2,
      scrollTrigger:{
        start: "45% center",
        end: "55% 60%",
        scrub:2
      }
    })
  });
  return (
    <div className="p-4 md:px-12 lg:px-16 xl:px-20 ">
      <div className="flex items-center justify-center wrap overflow-hidden mb-20">
        <h1 className="text-wrap mt-12 lg:mt-20 text font-thin uppercase w-4/5 text-6xl  sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl text-center ">
          Welcome to our
          <div className="e-com text-slate-500 "> E-commerce </div>
          website happy shopping<span className="dots">.....</span>
        </h1>
      </div>
      <div className="page2  flex items-center justify-center  mt-10 lg:mt-56 h-min-90">
        <img className="scale-125 lg:scale-110 img  lg:w-1/2 w-2/5" src="images/m.png" alt="" />
        <div className="imgTxt uppercase text-2xl sm:text-5xl lg:text-8xl text-center w-4/5">
          <div className="">indias best</div> <span className="circle text-slate-500 e-com"> E-commerce </span> <div> website</div>
          <div className="text-base sm:text-2xl m-4 sm:m-10">
            <li className="list-none items4 mt-2">Trusted By Millions</li>
            <li className="list-none items4 mt-2">Fast Delivery</li>
            <li className="list-none items4 mt-2">Original Brands</li>
            <li className="list-none items4 mt-2">Good Discounts </li>
          </div>
        </div>
      </div>
      <div className="page3 h-screen"></div>
    </div>
  );
}