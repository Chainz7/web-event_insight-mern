// @ts-nocheck
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CustomButton,
  JobCard,
  JobTypes,
  DayTypes,
  TextInput,
} from "../components";
import { jobs } from "../utils/data";

const UploadJob = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const [errMsg, setErrMsg] = useState("");
  const [jobTitle, setJobTitle] = useState("Festival");
  const [dayTitle, setDayTitle] = useState("Senin");

  const onSubmit = async (data) => {};

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 2xl:gap-14 bg-[#f7fdfd] px-5">
      <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md">
        <div>
          <p className="text-gray-500 font-semibold text-2xl">Event Post</p>

          <form
            className="w-full mt-2 flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name="jobTitle"
              label="Event Title"
              placeholder="eg. Festical FITK"
              type="text"
              required={true}
              register={register("jobTitle", {
                required: "Event Title is required",
              })}
              error={errors.jobTitle ? errors.jobTitle?.message : ""}
            />

            <div className="w-full flex gap-4">
              <div className={`w-1/2 mt-2`}>
                <label className="text-gray-600 text-sm mb-1">Event Type</label>
                <JobTypes jobTitle={jobTitle} setJobTitle={setJobTitle} />
              </div>

              <div className="w-1/2">
                <TextInput
                  name="salary"
                  label="HTM (RP)"
                  placeholder="eg. 50000"
                  type="number"
                  register={register("salary", {
                    required: "HTM is required",
                  })}
                  error={errors.salary ? errors.salary?.message : ""}
                />
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-1/3">
                <TextInput
                  name="date"
                  label="Date"
                  placeholder="10 / 12 / 2023"
                  type="date"
                  register={register("vacancies", {
                    required: "Date is required!",
                  })}
                  error={errors.vacancies ? errors.vacancies?.message : ""}
                />
              </div>

              <div className={`w-1/3 mt-2`}>
                <label className="text-gray-600 text-sm mb-1">Day</label>
                <DayTypes dayTitle={dayTitle} setDayTitle={setDayTitle} />
              </div>

              <div className="w-1/3">
                <TextInput
                  name="cp"
                  label="Contact Person"
                  placeholder="eg. 0819248914"
                  type="number"
                  register={register("experience", {
                    required: "CP is required",
                  })}
                  error={errors.experience ? errors.experience?.message : ""}
                />
              </div>
            </div>

            <TextInput
              name="location"
              label="Event Location"
              placeholder="eg. Universitas Malang"
              type="text"
              register={register("location", {
                required: "Event Location is required",
              })}
              error={errors.location ? errors.location?.message : ""}
            />
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">
                Event Description
              </label>
              <textarea
                className="rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 resize-none"
                rows={4}
                cols={6}
                {...register("desc", {
                  required: "Event Description is required!",
                })}
                aria-invalid={errors.desc ? "true" : "false"}
              ></textarea>
              {errors.desc && (
                <span role="alert" className="text-xs text-red-500 mt-0.5">
                  {errors.desc?.message}
                </span>
              )}
            </div>

            {errMsg && (
              <span role="alert" className="text-sm text-red-500 mt-0.5">
                {errMsg}
              </span>
            )}
            <div className="mt-2">
              <CustomButton
                type="submit"
                containerStyles="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none "
                title="Sumbit"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/3 2xl:2/4 p-5 mt-20 md:mt-0">
        <p className="text-gray-500 font-semibold">Recent Event Post</p>

        <div className="w-full flex flex-wrap gap-6">
          {jobs.slice(0, 4).map((job, index) => {
            return <JobCard job={job} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadJob;
