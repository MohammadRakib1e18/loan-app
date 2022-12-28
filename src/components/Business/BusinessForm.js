import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const BusinessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBusinessInfo = (data) => {
    const { managing_director, business_name, gst, address} = data;

    const date = new Date();
    const newBusinessInfo = {
      managing_director,
      business_name,
      gst,
      address,
      date: date.toDateString(),
    };

    fetch("http://localhost:5000/saveInfo?category=business", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBusinessInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Business Information Saved Successfully!");
      })

      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="mt-5 w-4/6 mx-auto  p-8 space-y-3 rounded-md  bg-slate-700   text-gray-200">
      <h1 className="text-2xl font-bold text-center">Loan Information</h1>
      <form
        onSubmit={handleSubmit(handleBusinessInfo)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Managing Director</label>
          <input
            type="text"
            {...register("managing_director", {
              required: "managing_director is Required",
            })}
            placeholder="managing director"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.managing_director && (
            <p className="text-red-500">{errors.managing_director.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Business Name</label>
          <input
            type="text"
            {...register("business_name", {
              required: "business_name is Required",
            })}
            placeholder="business name"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.business_name && (
            <p className="text-red-500">{errors.business_name.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Goods & Services Tax (GST) No: </label>
          <input
            type="text"
            {...register("gst", {
              required: "gst is Required",
            })}
            placeholder="gst no."
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.gst && (
            <p className="text-red-500">{errors.gst.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Address</label>
          <input
            type="text"
            {...register("address", {
              required: "address is Required",
            })}
            placeholder="address"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <button className="block w-full font-semibold p-3 text-center  btn btn-outline btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusinessForm;
