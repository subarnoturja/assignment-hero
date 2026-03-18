import React from 'react';

const StatBlock = ({ icon, iconBg, label, value }) => {
    return (
        <div>
        <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-2`}>
          {icon}
        </div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className="text-2xl md:text-3xl font-extrabold text-gray-900" style={{ fontFamily: "Syne, sans-serif" }}>
          {value}
        </p>
      </div>
    );
};

export default StatBlock;