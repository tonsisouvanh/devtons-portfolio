import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/avatar.png";
const Hero = () => {
  return (
    <section className="tcontainer">
      <div className="flex items-center justify-center flex-col md:flex-row gap-10 md:gap-16">
        <Image
          src={avatar}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-1/2 lg:w-1/4"
        />
        <div>
          <h1 className="mb-2 text-3xl lg:text-5xl font-bold text-white">
            <span className="text-cyan-500">Hi,</span> I&apos;m Tons,
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Full Stack Developer
            </p>
          </h1>
          <p className="mb-6 text-white">
            I have more than a year of experience as a website developer, and I
            mainly use React for building web applications and Nodejs for the
            backend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
