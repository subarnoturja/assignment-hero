import React, { useEffect, useState } from "react";
import Appcard from "./Appcard";

const TrendingApps = () => {

    const [apps, setApps] = useState([])

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setApps(data)
            console.log(data);
    })
    }, [])
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2"
          >
            Trending Apps
          </h2>
          <p className="text-base-content/50 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {apps.slice(0,8).map((app) => (
            <Appcard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-8">
          <button
            className="btn bg-violet-600 hover:bg-violet-700 text-white border-0 rounded-xl px-8 shadow-lg shadow-violet-200"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
