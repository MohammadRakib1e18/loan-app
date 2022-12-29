import React from "react";
import { toast } from "react-hot-toast";

const Profile = ({ profile, deleteProfile }) => {
  const {
    first_name,
    last_name,
    email,
    location,
    age,
    posted_time,
    image_url,
  } = profile.personal;
  const { managing_director, business_name, gst, address, date } =
    profile.business;

  const { loan_amount, loan_tenure, interest_rate } = profile.loan;

  return (
    <div className="bg-slate-800 p-2 rounded-md relative">
      <div className="avatar online">
        <div className="w-32 h-32">
          <img
            className="border-2 p-[2px] border-cyan-200 w-full h-full rounded-full object-cover"
            src={image_url}
            alt=""
          />
        </div>
      </div>
      <span
        onClick={() => deleteProfile(profile._id)}
        className="bg-red-500 px-2 rounded-full absolute top-2 right-2 cursor-pointer hover:bg-red-600 hover:scale-110 transition ease-in-out duration-500"
      >
        X
      </span>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-2">
        <div className="">
          <h2 className="text-cyan-200 font-semibold text-lg">
            Personal Details
          </h2>
          <hr />
          <h5>
            {first_name} {last_name}
          </h5>
          <p className="underline">ID: {profile.ID}</p>
          <p>{email}</p>
          <p>Location: {location}</p>
          <p>Age: {age}</p>
          <p>Created: {posted_time}</p>
        </div>
        <div className="">
          <h2 className="text-cyan-200 font-semibold text-lg">
            Business Details
          </h2>
          <hr />
          <h5>M.D. : {managing_director}</h5>
          <p>Business{business_name}</p>
          <p>GST: {gst}</p>
          <p>Where: {address}</p>
          <p>Dealt: {date}</p>
        </div>
        <div className="">
          <h2 className="text-cyan-200 font-semibold text-lg">Loan Details</h2>
          <hr />
          <p>Amount: {loan_amount}</p>
          <p>Interest: {interest_rate}</p>
          <p>Pay time: {loan_tenure}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
