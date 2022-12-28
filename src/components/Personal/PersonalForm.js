import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PersonalForm = () => {
  const navigate = useNavigate();

  const ID = localStorage.getItem("profile_id");

  const imageHostKey = process.env.REACT_APP_imgbb_key2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!ID) {
      toast.error("At first, Create a new profile with ID");
      navigate("/");
      return;
    }
  }, []);

  const handlePersonalInfo = (data) => {
    const personal = JSON.parse(localStorage.getItem("personal"));
    if (personal) {
      toast.success(
        "Already Personal information given. \n\nSuggestions:\n 1)fill up other form or \n 2)Take new profile"
      );
      return;
    }
    const { first_name, last_name, email, location, age } = data;

    const photo = data.image_url[0];

    const date = new Date();
    const newUser = {
      first_name,
      last_name,
      email,
      location,
      age,
      posted_time: date.toDateString(),
      image_url: photo,
    };

    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          newUser.image_url = data.data.url;

          localStorage.setItem("personal", JSON.stringify(newUser));

          const business = JSON.parse(localStorage.getItem("business"));
          const loan = JSON.parse(localStorage.getItem("loan"));

          if (!loan) {
            toast.error("Fill up the loan information");
            return;
          }
          if (!business) {
            toast.error("Fill up the business information");
            return;
          }
          const newInfo = {
            ID,
            business,
            loan,
            personal: newUser,
          };
          fetch("https://loan-app-server-nu.vercel.app/saveInfo", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Information Saved Successfully!");
              localStorage.clear();
              navigate("/");
            })

            .catch((error) => {
              toast.error(`${error.message}`);
            });
        }
      });
  };

  return (
    <div className="mt-5 w-4/6 mx-auto  p-8  rounded-md  bg-slate-700   text-gray-200">
      <h1 className="text-2xl font-bold text-center">Personal Information</h1>
      <p className="text-center text-sm mt-2">profile ID: ( {ID} )</p>
      <form
        onSubmit={handleSubmit(handlePersonalInfo)}
        className="space-y-6 ng-untouched ng-pristine ng-valid  mt-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5">
          <div className="mb-4 sm:md-0 sm:space-y-1 text-sm">
            <label className="block   text-gray-400">First Name</label>
            <input
              type="text"
              {...register("first_name", {
                required: "user name is Required",
              })}
              placeholder="first name"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            />
            {errors.first_name && (
              <p className="text-red-500">{errors.first_name.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label className="block   text-gray-400">Last Name</label>
            <input
              type="text"
              {...register("last_name", {
                required: "user name is Required",
              })}
              placeholder="last name"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            />
            {errors.last_name && (
              <p className="text-red-500">{errors.last_name.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: "email is Required",
            })}
            placeholder="email@gmail.com"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Location</label>
          <input
            type="text"
            {...register("location", {
              required: "location is Required",
            })}
            placeholder="location"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Age</label>
          <input
            type="text"
            {...register("age", {
              required: "age is Required",
            })}
            placeholder="age"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Contact Number</label>
          <input
            type="text"
            {...register("contact_number", {
              required: "contact_number is Required",
            })}
            placeholder="contact_number"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.contact_number && (
            <p className="text-red-500">{errors.contact_number.message}</p>
          )}
        </div>

        <div className="form-control space-y-1 w-full">
          <label className="block text-sm  text-gray-400">
            Upload your photo
          </label>
          <input
            type="file"
            {...register("image_url", {
              required: "Photo is Required",
            })}
            accept="image/*"
            className="input input-bordered w-full rounded-none   border-gray-700  pt-2   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url.message}</p>
          )}
        </div>

        <button className="block w-full font-semibold p-3 text-center  btn btn-outline btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalForm;
