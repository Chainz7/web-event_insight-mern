import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, " is required"],
  },
  email: {
    type: String,
    required: [true, "Email Name is required"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least"],
    select: true,
  },
  accountType: { type: String, default: "seeker" },
  contact: { type: String },
  location: { type: String },
  profileUrl: { type: String },
  jobPosts: [{ type: Schema.Type.ObjectId, ref: "Jobs" }],
});

companySchema.pre("save", async function () {
  if (!this.isModified) return;

  const salt = await bcrypt.getSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

// Compare Password
companySchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);

  return isMatch;
};

//JWT Token
companySchema.method.createToken = async function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

const Companies = mongoose.model("Companies", companySchema);

export default Companies;
