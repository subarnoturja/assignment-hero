import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { formatNumber } from "../../utils/formatNumber";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Appcard = ({ app }) => {

    const navigate = useNavigate();

  return (
    <div
        onClick={() => navigate(`/apps/${app.id}`)}
      className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-base-200"
    >
      <div className="card-body p-4 gap-2">
        {/* App Image */}
        <div
          className={`w-full aspect-square rounded-2xl flex items-center justify-center text-5xl mb-2 shadow-inner`}
        >
          <img src={app.image} alt="" />
        </div>
        {/* Title */}
        <h3 className="font-bold text-sm text-center leading-snug line-clamp-2 text-base-content">
          {app.title}
        </h3>
        {/* Meta */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex items-center text-md font-semibold bg-gray-300 px-2 border rounded-lg text-green-500">
          <MdOutlineFileDownload size={28} />
            {formatNumber(app.downloads)}
          </div>
          <div className="flex items-center text-md font-semibold bg-gray-300 px-2 border rounded-lg text-purple-500">
          <FaStar size={24} />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appcard;
