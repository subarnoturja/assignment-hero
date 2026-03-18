import React, { useState } from 'react';

const AppRow = ({ app, onUninstall, animDelay}) => {
    const [exiting, setExiting] = useState(false);
 
  const handleUninstall = () => {
    setExiting(true);
    setTimeout(() => onUninstall(app.id, app.title), 380);
  };
  
    return (
        <div
        className="bg-white rounded-2xl border border-gray-200 flex items-center gap-4 p-4 md:p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        style={{
          animation: exiting
            ? "rowExit 0.4s ease forwards"
            : `rowEnter 0.3s ease ${animDelay}ms both`,
        }}
      >
        {/* App image / emoji */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 select-none"
          style={{ fontSize: "2.2rem" }}>
          {app.emoji || "📦"}
        </div>
 
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-bold text-gray-900 text-sm md:text-base mb-2 truncate"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {app.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {/* Downloads */}
            <span className="flex items-center gap-1 text-teal-600 font-semibold text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              {app.downloads || "—"}
            </span>
            {/* Rating */}
            <span className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              {app.rating || "—"}
            </span>
            {/* Size */}
            <span className="text-gray-400 text-xs font-medium">{app.size}</span>
          </div>
        </div>
 
        {/* Uninstall button */}
        <button
          onClick={handleUninstall}
          className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-semibold text-sm rounded-xl px-5 py-2.5 border-0 transition-all duration-150 whitespace-nowrap shadow-sm"
        >
          Uninstall
        </button>
      </div>
    );
};

export default AppRow;