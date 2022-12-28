import React from "react";
import banner from "../../Images/banner.jpg";

const Home = () => {
  return (
    <div className="w-full  h-[300px] sm:h-[400px] md:h-[500px]">
      <img src={banner} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default Home;
