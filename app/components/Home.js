import React from "react";
import { IDCard } from ".";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full p-6 text-center text-black dark:text-white">
      <div className="flex-col ">
        <div>
          <p className="text-md sm:text-lg text-left ">
            Hi, I'm Tyler, a software engineer and digital humanitarian. Welcome
            to my digital development portfolio!{" "}
          </p>
          <br />
          <p className="text-md sm:text-lg text-left font-bold">
            Please check out my{" "}
            <Link to="/projects" className="text-blue-700 underline">
              software projects
            </Link>{" "}
            page for descriptions and links of my software!
          </p>
        </div>
        <div className="mx-auto">
          <img
            className="max-w-xs mx-auto w-full object-cover"
            src="/biopic-400w.jpg"
          />
        </div>
      </div>
      <br />
      Also check out my GitHub and LinkedIn profiles!
      <IDCard title={"GitHub"} url={"github.com/tymonaghan"} />
      <IDCard title={"LinkedIn"} url={"linkedin.com/in/tyler-monaghan-dev"} />
    </div>
  );
};

export default Home;
