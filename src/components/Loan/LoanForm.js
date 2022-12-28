import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoanInfo = (data) => {
    const { loan_amount, loan_tenure, interest_rate } = data;

    const newLoanInfo = {
      loan_amount,
      loan_tenure,
      interest_rate,
    };

    fetch("http://localhost:5000/saveInfo?category=loan", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newLoanInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Loan Information Saved Successfully!");
      })

      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="mt-5 w-4/6 mx-auto  p-8 space-y-3 rounded-md  bg-slate-700   text-gray-200">
      <h1 className="text-2xl font-bold text-center">Loan Information</h1>
      <form
        onSubmit={handleSubmit(handleLoanInfo)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Loan Amount</label>
          <input
            type="text"
            {...register("loan_amount", {
              required: "loan_amount is Required",
            })}
            placeholder="loan amount"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.loan_amount && (
            <p className="text-red-500">{errors.loan_amount.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Interest Rate</label>
          <input
            type="text"
            {...register("interest_rate", {
              required: "interest_rate is Required",
            })}
            placeholder="interest rate"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.interest_rate && (
            <p className="text-red-500">{errors.interest_rate.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Loan Tenure (Days)</label>
          <input
            type="text"
            {...register("loan_tenure", {
              required: "loan_tenure is Required",
            })}
            placeholder="loan tenure"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.loan_tenure && (
            <p className="text-red-500">{errors.loan_tenure.message}</p>
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
