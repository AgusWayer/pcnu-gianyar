import React from "react";

function Hero() {
  return (
    <div className="mx-0 px-0 flex items-center h-full">
      <div className="grid grid-cols-2 w-10/12 mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-white">SELAMAT DATANG DI WEBSITE PCNU KABUPATEN GIANYAR</h1>
        </div>
      </div>

      {/* vid */}
      <div className="absolute -z-10 w-full top-0">
        <div className="w-full h-full absolute bg-black opacity-75"></div>
        <video autoPlay loop muted={true} className="w-full h-screen object-cover">
          <source src="/vid-hero.mp4" className="" type="video/mp4" />
        </video>
      </div>
      {/* vid */}
    </div>
  );
}

export default Hero;
