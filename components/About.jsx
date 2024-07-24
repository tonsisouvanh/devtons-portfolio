import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaTiktok, FaWhatsapp } from "react-icons/fa";
import mysetup from "@/assets/images/mysetup.jpg";
const About = () => {
  return (
    <section id="about" className="tcontainer">
      <div className="font-sans max-w-6xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <div className="max-md:order-1 max-md:text-center">
            <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
              About Me
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              I&apos;m a Frontend Web Developer who specializes in building the
              front-end of websites and web applications, ensuring the success
              of the overall project. Check out some of my work in the Projects
              section. I&apos;m passionate about using frameworks like ReactJS for
              front-end web development, and seeing things rendered exactly as I
              envisioned is very satisfying for me. Please feel free to connect
              with me or follow me on my social media.
            </p>
            <div className="mt-10 space-x-4">
              <button
                type="button"
                className="bg-indigo-600 hover:bg-transparent hover:text-indigo-600 border-2 border-indigo-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5"
              >
                Check Out Projects
              </button>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <h4 className="font-bold text-base mb-2">Social Media</h4>
              <div className="flex max-md:justify-center items-center gap-4">
                <FaFacebook className="text-2xl text-slate-200" />
                <FaGithub className="text-2xl text-slate-200" />
                <FaWhatsapp className="text-2xl text-slate-200" />
                <FaTiktok className="text-2xl text-slate-200" />
              </div>
            </div>
          </div>
          <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:h-full before:w-3/4 before:right-0 before:z-0 before:bg-gradient-to-r before:from-indigo-500 before:to-cyan-300">
            <Image
              src={mysetup}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-md shadow-lg ring-4 ring-white lg:w-3/4 md:w-11/12 z-50 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
