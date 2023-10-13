// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsStars, BsCalendarDate } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Header from "../components/Header";
import Loading from "../components/Loading";
import { experience, jobTypes, jobs } from "../utils/data";
import { CustomButton, JobCard, ListBox } from "../components";

import moment from "moment";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsCalendarEvent } from "react-icons/bs";
import { BiMoney, BiTimeFive } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { Banner } from "../assets";

const style = { color: "#0885bb" };

const FindJobs = () => {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Filter
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  const filterJobs = (jobType) => {
    if (selectedJobTypes.includes(jobType)) {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== jobType));
    } else {
      setSelectedJobTypes([...selectedJobTypes, jobType]);
    }
  };

  // Showing Filter
  const [showCheckboxes, setShowCheckboxes] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    if (selectedJobTypes.length === 0) {
      return true;
    }
    return selectedJobTypes.includes(job.jobType);
  });
  return (
    <div>
      <Header
        title="Find Your Events with Ease"
        type="home"
        handleClick={() => {}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />

      <div className="container mx-auto flex gap-6 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#f7fdfd]">
        <div className="hidden md:flex flex-col w-1/6 h-fit bg-white shadow-md p-5 rounded-md shadow-lg border">
          <p className="text-lg font-semibold text-slate-600">Filter Search</p>

          <div className="py-2">
            <div className="flex justify-between mb-3">
              <p className="flex items-center gap-2 font-semibold">
                <BsStars />
                Event
              </p>
              <button onClick={() => setShowCheckboxes(!showCheckboxes)}>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            {showCheckboxes && (
              <div className="flex flex-col gap-2">
                {jobTypes.map((jtype, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center text-sm md:text-base "
                  >
                    <input
                      type="checkbox"
                      value={jtype}
                      className="w-4 h-4"
                      onChange={(e) => filterJobs(e.target.value)}
                    />
                    <span>{jtype}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-5/6 px-5 md:px-0">
          <div className="flex flex-col w-full  h-fit mb-4 bg-white shadow-md p-5 rounded-md shadow-lg border md:hidden">
            <p className="text-lg font-semibold text-slate-600">
              Filter Search
            </p>

            <div className="py-2">
              <div className="flex justify-between mb-3">
                <p className="flex items-center gap-2 font-semibold">
                  <BsStars />
                  Event
                </p>
                <button onClick={() => setShowCheckboxes(!showCheckboxes)}>
                  <MdOutlineKeyboardArrowDown />
                </button>
              </div>

              {showCheckboxes && (
                <div className="flex flex-col gap-2">
                  {jobTypes.map((jtype, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center text-sm md:text-base "
                    >
                      <input
                        type="checkbox"
                        value={jtype}
                        className="w-4 h-4"
                        onChange={(e) => filterJobs(e.target.value)}
                      />
                      <span>{jtype}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm md:text-base">
              Showing:{" "}
              <span className="font-semibold">{filteredJobs.length}</span>{" "}
              Events Available
            </p>

            {/* <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
              <p className="text-sm md:text-base">Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div> */}
          </div>

          <div className="w-full flex flex-wrap gap-4">
            {filteredJobs.map((job, index) => (
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
                        <span className="md:text-sm font-semibold">
                          Event Start
                        </span>
                        <div className="flex items-center gap-3 pt-1">
                          <BsCalendarEvent
                            style={style}
                            className="md:text-medium"
                          />
                          <span className="md:text-sm">{job?.dateStart}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BiTimeFive
                            style={style}
                            className="md:text-medium"
                          />
                          <span className="md:text-sm">{job?.timeStart}</span>
                        </div>
                      </div>
                      <div className="grid gap-1">
                        <span className="md:text-sm font-semibold">
                          Event End
                        </span>
                        <div className="flex items-center gap-3 pt-1">
                          <BsCalendarEvent
                            style={style}
                            className="md:text-medium"
                          />
                          <span className="md:text-sm">{job?.dateEnd}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BiTimeFive
                            style={style}
                            className="md:text-medium"
                          />
                          <span className="md:text-sm">{job?.timeEnd}</span>
                        </div>
                      </div>
                    </div>
                    {/* Speaker Location */}
                    <div className="flex justify-between pt-4 px-0">
                      <div className="grid gap-1">
                        <span className="md:text-sm font-semibold">
                          Location
                        </span>
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
            ))}
          </div>

          {numPage > page && !isFetching && (
            <div className="w-full flex items-center justify-center pt-16">
              <CustomButton
                title="Load More"
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
