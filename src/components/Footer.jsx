import React from 'react';
import logoImg from "../assets/logo.png"
import facebookImg from"../assets/facebook.png"
import youtubeImg from"../assets/youtube.png"
import instagramImg from"../assets/instagram.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logoImg}  className="w-8 h-8" alt="" />
          <span
            className="font-bold text-white tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            HERO IO
          </span>
        </button>
        <p className="text-gray-500 text-xs text-center">
          Copyright © 2025 – All right reserved
        </p>
        <div className="flex items-center gap-3">
            <img src={facebookImg} className='h-7 w-7' alt="" />
            <img src={youtubeImg} className='h-7 w-7' alt="" />
            <img src={instagramImg} className='h-7 w-7' alt="" />
        </div>
      </div>
    </footer>
    );
};

export default Footer;