import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import banner from "../../Images/banner.jpg";
import Profile from "./Profile";

const Home = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://loan-app-server-nu.vercel.app/saveInfo")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);
  if (!profiles || loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const handleNewProfile = () => {
    if (!user?.uid) {
      toast.error("Please, Login to create profile");
      navigate("/login");
    }
    else{
      localStorage.clear();
      const ID = Math.ceil(Math.random() * (99999999 - 10000001)) + 10000001;
      localStorage.setItem("profile_id", ID);
      navigate("/personal");
    }
  };

  const confirmDelete = (id) => {
    fetch(`https://loan-app-server-nu.vercel.app/deleteProfile/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Profile Deleted");
        let resProfiles = profiles.filter((profile) => profile._id !== id);
        setProfiles(resProfiles);
      });
  };

  const deleteProfile = (profileId) => {
    if (!user?.uid) {
      toast.error("Please, Login to delete");
      navigate("/login");
    } else {
      toast((t) => (
        <span>
          Are you sure to <b>Delete?</b>
          <br />
          <button
            className="w-20 mr-2 bg-slate-800 text-slate-200 px-2 py-1 rounded-full"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-slate-200 px-2 rounded-full py-1 "
            onClick={() => confirmDelete(profileId)}
          >
            Confirm
          </button>
        </span>
      ));
    }
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline text-center">
          All Profiles
        </h2>
        <>
          {profiles?.length > 0 ? (
            <div className="mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {profiles?.map((profile) => (
                <Profile
                  key={profile.ID}
                  profile={profile}
                  deleteProfile={deleteProfile}
                ></Profile>
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center">
              <h2 className="text-2xl sm:text-4xl font-bold md:text-6xl mt-8 text-slate-800">
                No Profiles added
              </h2>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Home;
