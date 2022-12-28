import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Business from "./Business/Business";
import Home from "./Home/Home";
import LoanForm from "./Loan/LoanForm";
import Personal from "./Personal/PersonalForm";

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
        element: <Personal></Personal>,
      },
      {
        path: "/Business",
        element: <Business></Business>,
      },
      {
        path: "/Loan",
        element: <LoanForm></LoanForm>,
      },
    ],
  },
]);
