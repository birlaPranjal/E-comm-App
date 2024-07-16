"use client";

import React, { useState } from "react";
import svvvLogo from "@/../public/imc.png";
import AbhyudayaLogo from "@/../public/hackndorewhite.png";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleModel = () => {
    setNavOpen(!navOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <motion.nav 
      className="sm:bg-rich-blue-bg bg-[#111644ee] fixed sm:static w-full z-20 sm:opacity-90"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link href={"./"} className="py-2 flex">
            <Image
              src={svvvLogo}
              className="h-8 w-8 md:h-16 md:w-16 mr-2"
              alt="Logo"
            />
            <Image
              src={AbhyudayaLogo}
              className="h-8 w-52 md:h-16 md:w-64 translate-y-1"
              alt="Logo"
            />
          </Link>
        </motion.div>
        <motion.div className="text-white hidden sm:flex sm:translate-x-16" variants={containerVariants}>
          {navData?.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={item?.path}
                className="px-4 text-[#EEE] hover:text-[#fff] hover:scale-125 text-nowrap transition-all duration-200 ease-in-out"
              >
                {item?.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="sm:invisible relative" variants={itemVariants}>
          <button onClick={toggleModel}>
            {!navOpen && <FiAlignJustify color="white" size={35} />}
            {navOpen && <FaTimes color="#ddd" size={35} />}
          </button>
          {navOpen && (
            <motion.div 
              className="absolute right-4 flex flex-col"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {navData?.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    href={item?.path}
                    className="px-8 py-1 border-b bg-[#0f1437b0] text-[#eee] hover:text-[#fff] text-nowrap transition-all duration-200 ease-in-out"
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href='https://unstop.com/p/hackndore-indore-municipal-corporation-1069856?lb=A3xScbSM&utm_medium=Share&utm_source=WhatsApp'
            target="_blank"
            className="hidden lg:block relative px-4 py-2 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;