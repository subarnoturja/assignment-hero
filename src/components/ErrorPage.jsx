import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24">

        {/* Illustration */}
        <div className="laptop-float mb-8 w-full max-w-sm md:max-w-md lg:max-w-lg">
          <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">

            {/* Background leaves */}
            <ellipse cx="110" cy="210" rx="28" ry="90" fill="#1a4d6e" transform="rotate(-30 110 210)" opacity="0.9"/>

            {/* 404 Text */}
            <text
              x="262"
              y="310"
              textAnchor="middle"
              fontSize="86"
              fontWeight="900"
              fill="#7c3aed"
              style={{ fontFamily: "Syne, sans-serif" }}
              letterSpacing="-2"
            >
              404
            </text>

          </svg>
        </div>

        {/* Text + CTA */}
        <div className="text-center text-enter">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Oops, page not found!
          </h1>

          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-sm mx-auto">
            The page you are looking for is not available.
          </p>

          <Link
            to="/"
            className="btn bg-violet-600 hover:bg-violet-700 active:scale-95 text-white border-0 rounded-xl px-10 py-3 font-semibold text-base shadow-lg shadow-violet-200 transition-all"
          >
            Go Back!
          </Link>
        </div>

      </main>
    </div>
    );
};

export default ErrorPage;