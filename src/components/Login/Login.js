import React, { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import { Spinner } from "flowbite-react";

const Login = () => {
  const { loading, signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {})
      .catch((error) => {
        toast.error(`login error: ${error.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("SignIn with Google Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
        navigate("/");
      });
  };

  return (
    <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3 rounded-xl   bg-slate-700   text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign in</h1>
      <form
        onSubmit={handleLogin}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block   text-gray-400">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm relative">
          <label htmlFor="password" className="block   text-gray-400">
            Password
          </label>
          <input
            type='password'
            name="password"
            id="password"
            placeholder="**********"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
        </div>
        <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16   bg-gray-400 "></div>
        <p className="px-3 text-sm   text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
      </div>
      <div className="flex justify-between space-x-4">
        <h2
          onClick={handleGoogleSignIn}
          className="bg-red-500 text-2xl w-full rounded-full flex justify-center py-2 cursor-pointer"
        >
          <FaGoogle />
        </h2>
      </div>
      <p className="text-xs text-center sm:px-6   text-gray-400">
        Don't have an account?
        <Link to="/registration" className="ml-2 underline   text-gray-100">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
