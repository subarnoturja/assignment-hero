import React from 'react';

const RatingBar = ({ star, count, maxCount, animate }) => {
    const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
    return (
        <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500 w-10 text-right flex-shrink-0">{star}</span>
        <div className="flex-1 bg-gray-100 rounded overflow-hidden" style={{ height: "22px" }}>
          <div
            className="h-full rounded bg-orange-500 transition-all"
            style={{
              width: animate ? `${pct}%` : "0%",
              transitionDuration: "1.1s",
              transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
        <span className="text-xs text-gray-400 w-14 flex-shrink-0 text-right">
          {count.toLocaleString()}
        </span>
      </div>
    );
};

export default RatingBar;