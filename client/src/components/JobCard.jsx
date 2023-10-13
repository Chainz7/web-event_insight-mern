import React from "react";
import moment from "moment";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsCalendarEvent } from "react-icons/bs";
import { BiMoney, BiTimeFive } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Banner } from "../assets";

const style = { color: "#0885bb" };

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`}>
      <div className="w-full md:w-[20.4rem] 2xl:w-[24.5rem] h-auto md:h-auto bg-white flex flex-col justify-between shadow-lg rounded-md border gap-4">
        {/* 1 */}
        <div className="h-36 flex justify-center items-center">
          <img src={Banner} alt="UNM" className="w-44" />
        </div>
        {/* 2 */}
        <div className="bg-[#F2F2F2] p-4">
          <span className="flex text-sm font-medium text-[#303388] pb-1">
            {job?.jobType}
            {/* <GoLocation className="text-slate-900 text-sm" /> */}
          </span>
          <span className="font-semibold text-base text-[#4A4A4A]">
            {job?.jobTitle?.slice(0, 60)}
          </span>
        </div>
        {/* 3 */}
        <div className="px-4">
          <p className="text-sm">
            {job?.detail[0]?.desc?.slice(0, 145) + "..."}
          </p>
          {/* Event Start */}
          <div className="flex justify-between pt-4 px-0">
            <div className="grid gap-1">
              <span className="md:text-sm font-semibold">Event Start</span>
              <div className="flex items-center gap-3 pt-1">
                <BsCalendarEvent style={style} className="md:text-medium" />
                <span className="md:text-sm">{job?.dateStart}</span>
              </div>
              <div className="flex items-center gap-3">
                <BiTimeFive style={style} className="md:text-medium" />
                <span className="md:text-sm">{job?.timeStart}</span>
              </div>
            </div>
            <div className="grid gap-1">
              <span className="md:text-sm font-semibold">Event End</span>
              <div className="flex items-center gap-3 pt-1">
                <BsCalendarEvent style={style} className="md:text-medium" />
                <span className="md:text-sm">{job?.dateEnd}</span>
              </div>
              <div className="flex items-center gap-3">
                <BiTimeFive style={style} className="md:text-medium" />
                <span className="md:text-sm">{job?.timeEnd}</span>
              </div>
            </div>
          </div>
          {/* Speaker Location */}
          <div className="flex justify-between pt-4 px-0">
            <div className="grid gap-1">
              <span className="md:text-sm font-semibold">Location</span>
              <div className="flex items-center gap-3">
                <MdLocationOn style={style} className="text-lg" />
                <span className="md:text-sm">{job?.location}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex items-center justify-between p-4">
          <p className="bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm">
            {job?.salary}
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
