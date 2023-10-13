// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { jobs } from "../utils/data";
import { CustomButton, JobCard } from "../components";

const JobDetail = () => {
  const params = useParams();
  const id = parseInt(params.id) - 1;
  const [job, setJob] = useState(jobs[0]);
  const [selected, setSelected] = useState("0");

  useEffect(() => {
    setJob(jobs[id ?? 0]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md">
          <div className="w-full flex items-center justify-between">
            <div className="w-3/4 flex gap-4">
              <img
                src={job?.company?.profileUrl}
                alt={job?.company?.name}
                className="w-20 h-20 rounded"
              />

              <div className="flex flex-col">
                <p className="text-xl font-semibold text-gray-600">
                  {job?.jobTitle}
                </p>

                <span className="text-base">{job?.location}</span>

                <span className="text-base text-blue-600">
                  {job?.company?.name}
                </span>

                <span className="text-gray-500 text-sm">
                  {moment(job?.createdAt).fromNow()}
                </span>
              </div>
            </div>

            <div className="">
              <AiOutlineSafetyCertificate className="text-3xl text-blue-500" />
            </div>
          </div>

          <div className="w-full flex flex-wrap md:flex-row gap-2 items-center justify-between my-10">
            <div className="bg-[#bdf4c8] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">HTM</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.salary}
              </p>
            </div>

            <div className="bg-[#bae5f4] w-40 h-16 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">Date</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.dateStart}
              </p>
            </div>

            <div className="bg-[#fed0ab] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">Time</span>
              <p className="text-lg font-semibold text-gray-700">
                {job?.timeStart}
              </p>
            </div>

            <div className="bg-[#cecdff] w-40 h-16 px-6 rounded-lg flex flex-col items-center justify-center">
              <span className="text-sm">Contact Person</span>
              <p className="text-lg font-semibold text-gray-700">{job?.cp}</p>
            </div>
          </div>

          <div className="w-full flex gap-4 py-5">
            <CustomButton
              onClick={() => setSelected("0")}
              title="Event Description"
              containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                selected === "0"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            />

            <CustomButton
              onClick={() => setSelected("1")}
              title="Event Poster"
              containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                selected === "1"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            />
          </div>

          <div className="my-6">
            {selected === "0" ? (
              <>
                <p className="text-xl font-semibold">Event Decsription</p>

                <span className="text-base">{job?.detail[0]?.desc}</span>

                {job?.detail[0]?.requirement && (
                  <>
                    <p className="text-xl font-semibold mt-8">
                      Link Registration
                    </p>
                    <span className="text-base">
                      🔗 {job?.detail[0]?.requirement}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="text-xl font-semibold mb-4">Event Poster</p>
                <div className="flex justify-center">
                  <img src={job?.posterUrl} />
                </div>
              </>
            )}
          </div>

          {/* <div className="w-full">
            <CustomButton
              title="Apply Now"
              containerStyles={`w-full flex items-center justify-center text-white bg-black py-3 px-5 outline-none rounded-full text-base`}
            />
          </div> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/3 2xl:w-2/4 p-5 mt-20 md:mt-0">
          <p className="text-gray-500 font-semibold">Similar Event</p>

          <div className="w-full flex flex-wrap gap-4">
            {jobs?.slice(0, 6).map((job, index) => (
              <JobCard job={job} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
