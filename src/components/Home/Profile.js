import React from "react";

const Profile = ({ profile }) => {
  console.log(profile);
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
    <div className="bg-slate-800 p-2 rounded-md">
      <div className="avatar online">
        <div className="w-32 h-32">
          <img
            className="border-2 p-[2px] border-cyan-200 w-full h-full rounded-full object-cover"
            src={image_url}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-2">
        <div className="">
          <h2 className="">Personal Details</h2>
          <hr />
          <h5>
            {first_name} {last_name}
          </h5>
          <p>{email}</p>
          <p>Location: {location}</p>
          <p>Age: {age}</p>
          <p>Created: {posted_time}</p>
        </div>
        <div className="">
          <h2>Business Details</h2>
          <hr />
          <h5>M.D. : {managing_director}</h5>
          <p>Business{business_name}</p>
          <p>GST: {gst}</p>
          <p>Where: {address}</p>
          <p>Dealt: {date}</p>
        </div>
        <div className="">
          <h2>Loan Details</h2>
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
