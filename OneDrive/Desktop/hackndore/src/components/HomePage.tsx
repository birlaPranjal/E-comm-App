import React from 'react';
import Navbar from './common/Navbar';
import SectionDividerLine from './SectionDividerLine';
import { Turret_Road } from "next/font/google";
import ScrambleText from '@/components/ScrambleText';
import Link from "next/link";
export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="w-11/12 mx-auto p-5 sm:pt-11 max-w-[110rem] pt-36"
      >
        <div className="-mt-10 flex flex-col-reverse md:items-center lg:flex-row gap-10 lg:mt-10">
          <div className="lg:w-3/5 flex flex-col gap-5">
            <h1
              className={`font-extrabold text-2xl sm:text-4xl xl:text-5xl myShadow text-primary-heading  ${turret.className}`}
            >
              Hack&apos;Ndore Hackathon
            </h1>
            <ScrambleText/>
            <p className="pl-4 text-base sm:text-xl ">
            Welcome to the inaugural Hack&apos;Ndore Hackathon, Central India&apos;s largest technology event, brought to you by Indore Municipal Corporation, under the leadership of Hon&apos;ble Mayor of Indore Shri Pushyamitra Bhargav. This pioneering hackathon aims to tackle real-time challenges faced by our Municipal Corporation, e-Nagarpalika and other e-Governance portals.
            </p>
            <div className='flex items-center' >
            <Link
            href='https://unstop.com/p/hackndore-indore-municipal-corporation-1069856?lb=A3xScbSM&utm_medium=Share&utm_source=WhatsApp'
            target="_blank"
            className="relative px-4 py-2 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg max-w-56 text-center mx-auto"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
          </Link>
            </div>
          </div>
          <div className="sm:mt-5  lg:w-3/5 xl:w-2/5">
            <video src="./heroVideo.mp4" className="border-4 border-gray-500" autoPlay loop muted></video>
          </div>
        </div>
        <div className="md:h-10"></div>
        <SectionDividerLine />
      </section>
    </div>
  );
};

export default HomePage;
