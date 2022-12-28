import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./components/routes";

function App() {
  return (
    <div className="text-slate-200">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-right"></Toaster>
    </div>
  );
}

export default App;
