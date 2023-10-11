import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Companies" },
    jobTitle: { type: String, required: [true, "Event Title is required"] }, //Event title
    jobType: { type: String, required: [true, "Event Type is required"] }, // Event type
    location: { type: String, required: [true, "Location is required"] }, // Location
    salary: { type: String, required: [true, "HTM is required"] }, // HTM
    dateStart: { type: String, required: [true, "Event date is required"] }, // Event Start Date
    dateEnd: { type: String, required: [true, "Event date end is requiered"] }, // Event End Date
    timeStart: { type: String, required: [true, "Event time is requiered"] }, // Event Start Time
    timeEnd: { type: String, required: [true, "Event time end is requiered"] }, // Event End Time
    dayType: { type: String, required: [true, "Day is required"] }, // Event Day
    detail: [{ desc: { type: String }, requirements: { type: String } }], // Event description & Link
    posterUrl: { type: String }, // Event Poster
    application: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobSchema);

export default Jobs;
