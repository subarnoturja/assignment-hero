import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8 animate-pulse">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center shadow-inner">
            <img />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1">
            
          </h1>
          <p className="text-gray-400 text-sm mb-5">
            <br />
            <a
              href="#"
              className="text-violet-600 font-semibold hover:underline"
            >
            </a>
          </p>

          <hr className="border-gray-100 mb-5" />

          {/* Install button */}
          <button className="btn rounded-xl px-6 font-semibold text-sm gap-2 border-0 transition-all">

          </button>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
