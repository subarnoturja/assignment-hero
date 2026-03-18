import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      <div className="text-8xl" style={{ animation: "floatBob 3s ease-in-out infinite" }}>📭</div>
      <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: "Syne, sans-serif" }}>
        No Apps Installed Yet
      </h3>
      <p className="text-gray-400 text-sm">Head to the Apps page and install your favorites.</p>
      <Link to='/apps'>
      <button
        className="btn bg-violet-600 hover:bg-violet-700 text-white border-0 rounded-xl px-8 mt-2 shadow shadow-violet-200"
      >
        Browse Apps →
      </button>
      </Link>
    </div>
    );
};

export default EmptyState;