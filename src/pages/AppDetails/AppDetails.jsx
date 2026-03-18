import React, { useEffect, useRef, useState } from "react";
import StatBlock from "../../components/StatBlock";
import RatingBar from "../../components/RatingBar";
import { formatNumber } from "../../../utils/formatNumber";
import { useParams } from "react-router";

const AppDetails = () => {
    const { id } = useParams(); // ✅ get id from URL

    const [app, setApp] = useState(null);
    const [installed, setInstalled] = useState(false);
    const [barsAnimated, setBarsAnimated] = useState(false);
    const barsRef = useRef(null);

    useEffect(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => {
            const foundApp = data.find((a) => a.id === parseInt(id));
            setApp(foundApp);
          });
      }, [id]);

    useEffect(() => {
        if(!app) return;
        const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (saved.some((a) => a.id === app.id)) {setInstalled(true);}
      }, [app]);
     
      // Animate bars after mount
      useEffect(() => {
        const timer = setTimeout(() => setBarsAnimated(true), 300);
        return () => clearTimeout(timer);
      }, []);
     
      const handleInstall = () => {
        if (!app || installed) return;
        const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (!saved.some((a) => a.id === app.id)) {
          saved.push({
            id: app.id, 
            title: app.title, 
            company: app.companyName,
            image: app.image, 
            downloads: app.downloads, 
            rating: app.ratingAvg, 
            size:app.size,
          });
          localStorage.setItem("installedApps", JSON.stringify(saved));
        }
        setInstalled(true);
      };
     
      const maxCount = app?.ratings ? Math.max(...app.ratings.map(r => r.count)) : 0;

      if (!app) {
        return <p>Loading...</p>;
      }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* ── App Hero Card ── */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            {/* Image */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center shadow-inner">
                <img src={app.image} alt={app.title} />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1
                className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1">
                {app.title}
              </h1>
              <p className="text-gray-400 text-sm mb-5">
                Developed by{" "}
                <a
                  href="#"
                  className="text-violet-600 font-semibold hover:underline"
                >
                  {app.companyName}
                </a>
              </p>

              <hr className="border-gray-100 mb-5" />

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 md:gap-12 mb-6">
                <StatBlock
                  iconBg="bg-teal-50"
                  icon={
                    <svg
                      className="w-5 h-5 text-teal-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  label="Downloads"
                  value={formatNumber(app.downloads)}
                />
                <StatBlock
                  iconBg="bg-amber-50"
                  icon={
                    <svg
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  }
                  label="Ratings"
                  value={app.ratingAvg}
                />
                <StatBlock
                  iconBg="bg-violet-50"
                  icon={
                    <svg
                      className="w-5 h-5 text-violet-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  }
                  label="Total Reviews"
                  value={formatNumber(app.reviews)}
                />
              </div>

              {/* Install button */}
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn rounded-xl px-6 font-semibold text-sm gap-2 border-0 transition-all ${
                  installed
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-100 active:scale-95"
                }`}
                style={
                  !installed
                    ? { animation: "pulse-green 2.5s ease-in-out infinite" }
                    : {}
                }
              >
                {installed ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Installed
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Install Now ({app.size} MB)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* ── Ratings Chart ── */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
          <h2
            className="text-lg font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Ratings
          </h2>

          <div ref={barsRef} className="space-y-3 mb-3">
            {app.ratings.map(({ name, count }) => (
              <RatingBar
                key={name}
                star={name}
                count={count}
                maxCount={maxCount}
                animate={barsAnimated}
              />
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between pl-14 pr-16 mt-3">
            {[0, 3000, 6000, 9000, 12000].map((n) => (
              <span key={n} className="text-xs text-gray-400">
                {n.toLocaleString()}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* ── Description ── */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
          <h2
            className="text-lg font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Description
          </h2>
          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            {app.description}
          </div>
        </div>
      </main>

      {/* Keyframe for install button */}
      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
          50%       { box-shadow: 0 0 0 10px rgba(16,185,129,0); }
        }
      `}</style>
    </div>
  );
};

export default AppDetails;