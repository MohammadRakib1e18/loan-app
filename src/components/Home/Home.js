import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../Images/banner.jpg";
import Profile from "./Profile";

const Home = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/saveInfo")
    .then(res=>res.json())
    .then(data => setProfiles(data));
  },[])
  if(!profiles){
    return <h2>Loading, please wait......</h2>
  }

  const handleNewProfile = () => {
    localStorage.clear();
    const ID = Math.ceil(Math.random() * (99999999 - 10000001)) + 10000001;
    localStorage.setItem("profile_id", ID);
    navigate("/personal");
  };

  return (
    <div className="">
      <div className="w-full  h-[300px] sm:h-[400px] md:h-[500px]">
        <img src={banner} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleNewProfile}
          className=" hover:scale-105 transition ease-in-out duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 h-36 w-36 text-lg font-semibold px-4 rounded-full hover:trans"
        >
          Create New Profile?
        </button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center">Check All the Profiles</h2>
        <div className="mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <Profile key={profile.ID} profile={profile}></Profile>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
