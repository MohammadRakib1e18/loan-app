import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BusinessForm from "./Business/BusinessForm";
import Home from "./Home/Home";
import LoanForm from "./Loan/LoanForm";
import PersonalForm from "./Personal/PersonalForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/personal",
        element: <PersonalForm></PersonalForm>,
      },
      {
        path: "/Business",
        element: <BusinessForm></BusinessForm>,
      },
      {
        path: "/Loan",
        element: <LoanForm></LoanForm>,
      },
    ],
  },
]);
