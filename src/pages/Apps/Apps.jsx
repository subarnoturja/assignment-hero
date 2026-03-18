import React, { useEffect, useRef, useState } from 'react';
import Appcard from '../../components/Appcard';
import { DiVisualstudio } from 'react-icons/di';

const Apps = () => {

    const [apps, setApps] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const timerRef = useRef(null);

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

    const handleSearch = (e) => {
        const val = e.target.value;
        setQuery(val);
        setSearching(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          const q = val.toLowerCase().trim();
          setApps(apps.filter((a) => a.title.toLowerCase().includes(q)));
          setSearching(false);
        }, 250);
      };

    return (
        <div className="bg-gray-50 border-b border-gray-200 py-10 md:py-14 text-center px-4">
        <div className="flex justify-center items-center gap-3">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Our All Applications
        </h1>
        <DiVisualstudio size={40} color="blue" />
        </div>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
 
        {/* Controls row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="text-gray-700 font-semibold text-base">
            <span className="text-gray-900">({apps.length})</span> Apps Found
          </div>
 
          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="search Apps"
              className="w-full pl-9 pr-4 py-2.5 border-[1.5px] border-gray-200 rounded-xl text-sm text-gray-700 bg-white outline-none focus:border-violet-500 transition-colors placeholder:text-gray-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>
        </div>
 
        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-spinner loading-lg text-violet-600"></span>
          </div>
        )}
 
        {/* Searching spinner */}
        {!loading && searching && (
          <div className="flex justify-center items-center py-16">
            <span className="loading loading-spinner loading-md text-violet-500"></span>
          </div>
        )}
 
        {/* Grid */}
        {!loading && !searching && apps.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {apps.map((app, i) => (
              <Appcard key={app.id} app={app} delay={i * 30} />
            ))}
          </div>
        )}
 
        {/* Empty state */}
        {!loading && !searching && apps.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3
              className="text-xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              No App Found
            </h3>
            <p className="text-gray-400 text-sm">Try a different search keyword</p>
          </div>
        )}
      </main>
      </div>
    );
};

export default Apps;