import React from "react";
import { IDCard } from ".";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full px-4 py-2 sm:p-6 text-center text-text-primary-light dark:text-text-primary-dark">
      <div className="flex-col ">
        <p className="text-sm sm:text-base text-left ">
          Hi, I'm Tyler, a software engineer and digital humanitarian. Welcome
          to my digital development portfolio!{" "}
        </p>
        <br />
        <p className="text-sm sm:text-base text-left font-bold">
          Please check out my{" "}
          <Link
            to="/projects"
            className="text-link-light underline dark:text-link-dark"
          >
            Projects
          </Link>{" "}
          page for descriptions and links of my software!
        </p>
        <div className="mx-auto">
          <img
            className="max-w-xs mx-auto w-full object-cover"
            src="/biopic-400w.jpg"
          />
        </div>
      </div>
      <div className="mt-3">
        Also check out my GitHub and LinkedIn profiles!
        <IDCard title={"GitHub"} url={"github.com/tymonaghan"} />
        <IDCard title={"LinkedIn"} url={"linkedin.com/in/tyler-monaghan-dev"} />
      </div>
    </div>
  );
};

export default Home;
