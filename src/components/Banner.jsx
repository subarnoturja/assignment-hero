import React from 'react';
import bannerImg from '../assets/hero.png'
import playImg from "../assets/google-play.png"
import appStore from "../assets/app-store.png"

const Banner = () => {

    const stats = [
        { value: "29.6M", label: "Total Downloads", sub: "21% More Than Last Month" },
        { value: "906K", label: "Total Reviews", sub: "46% More Than Last Month" },
        { value: "132+", label: "Active Apps", sub: "31 More Will Launch" },
      ];

    return (
        <div>
            <div className="bg-white pt-12 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Text */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            We Build
            <br />
            <span className="text-violet-600">Productive</span> Apps
          </h1>
          <p className="text-base-content/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 mt-7 flex-wrap">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-sm gap-2 p-6 rounded-xl font-semibold text-xl"
            >
              <img src={playImg} className='h-7 w-7' />
              Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-sm gap-2 p-6 rounded-xl font-semibold text-xl"
            >
              <img src={appStore} className='h-7 w-7' />
              App Store
            </a>
          </div>
        </div>
 
        {/* Phone Mockup + Floating Icons */}
        <div className="relative flex justify-center items-end">
            <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
    <div className="bg-violet-600 py-10 md:py-14">
    <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
      <h2
        className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Trusted By Millions, Built For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-white">
            <div
              className="text-4xl md:text-5xl font-extrabold mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {stat.value}
            </div>
            <div className="text-violet-100 font-semibold text-sm md:text-base">{stat.label}</div>
            <div className="text-violet-300 text-xs mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
        </div>
    );
};

export default Banner;