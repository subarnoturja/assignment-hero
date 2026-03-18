import React, { useCallback, useEffect, useState } from "react";
import { readInstalled, writeInstalled } from "../../../utils/formatNumber";
import EmptyState from "../../components/EmptyState";
import AppRow from "../../components/AppRow";

const Installations = () => {

    const [apps, setApps] = useState([]);
    const [sortMode, setSortMode] = useState("default");
    const [loading, setLoading]  = useState(true);

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            const t = setTimeout(() => {
                setApps(data)
                setLoading(false);
            }, 500);    
            return () => clearTimeout(t);
    }) 
    }, [])

    function enrich(app) {
        const m = apps[app.id] || {};
        return { ...app, size: m.size || "—", downloadsNum: m.downloadsNum || 0, ratingNum: m.ratingNum || 0 };
      }
       
      function applySort(apps, mode) {
        const a = apps.map(enrich);
        if (mode === "dl-high") return [...a].sort((x, y) => y.downloadsNum - x.downloadsNum);
        if (mode === "dl-low")  return [...a].sort((x, y) => x.downloadsNum - y.downloadsNum);
        if (mode === "rt-high") return [...a].sort((x, y) => y.ratingNum - x.ratingNum);
        if (mode === "rt-low")  return [...a].sort((x, y) => x.ratingNum - y.ratingNum);
        return a;
      }

    const handleUninstall = useCallback((id) => {
        const updated = readInstalled().filter((a) => a.id !== id);
        writeInstalled(updated);
        setApps(updated);
      }, []);
     
      const displayApps = applySort(apps, sortMode);

  return (
    <div
      className="min-h-screen bg-gray-50"
      data-theme="light"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      <main
        className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-14"
        style={{ minHeight: "calc(100vh - 56px - 144px)" }}
      >
        {/* Page heading */}
        <div className="text-center mb-10 md:mb-12">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Your Installed Apps
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24">
            <span className="loading loading-spinner loading-lg text-violet-600"></span>
          </div>
        )}

        {!loading && (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
              <h2
                className="text-base md:text-lg font-bold text-gray-800"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {displayApps.length} App{displayApps.length !== 1 ? "s" : ""}{" "}
                Found
              </h2>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value)}
                className="border-[1.5px] border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white outline-none focus:border-violet-500 cursor-pointer transition-colors min-w-[170px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <option value="default">Sort By Size</option>
                <option value="dl-high">Downloads: High → Low</option>
                <option value="dl-low">Downloads: Low → High</option>
                <option value="rt-high">Rating: High → Low</option>
                <option value="rt-low">Rating: Low → High</option>
              </select>
            </div>

            {/* Empty or list */}
            {displayApps.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-3">
                {displayApps.map((app, i) => (
                  <AppRow
                    key={app.id}
                    app={app}
                    onUninstall={handleUninstall}
                    animDelay={i * 55}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      
    </div>
  );
};

export default Installations;
