import React from "react";
import moment from "moment";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`}>
      <div className="w-full md:w-[20.4rem] 2xl:w-[24.5rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg rounded-md p-5 ">
        <div className="flex gap-3">
          <img
            src={job?.posterUrl}
            alt={job?.company?.name}
            className="w-20 h-20 rounded"
          />

          <div>
            <span className="text-lg font-semibold truncate">
              {job?.jobTitle}
            </span>
            <span className="flex gap-2 items-center">
              <GoLocation className="text-slate-900 text-sm" />
              {job?.location}
            </span>
          </div>
        </div>

        <div className="py-3">
          <p className="text-sm">
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
            {job?.jobType}
          </p>
          <span className="text-gray-500 text-sm">
            {moment(job?.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
