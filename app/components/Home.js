import React from "react";
import { IDCard } from ".";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-col h-full lg:columns-2 w-full px-4 sm:px-8 py-2 sm:py-4 text-center text-text-primary-light dark:text-text-primary-dark">
      <div className="flex-col lg:px-6 ">
        <p className="text-sm sm:text-base text-left">
          Hi, I'm Tyler, a software engineer and digital humanitarian. Welcome
          to my digital development portfolio!{" "}
        </p>
        <p className="text-sm sm:text-base text-left font-bold my-3">
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
      <div className="text-sm sm:text-base text-left lg:text-center my-3 flex-col h-auto">
        <p className="lg:max-h-5 ">
          Also check out my GitHub and LinkedIn profiles!
        </p>
        <IDCard title={"GitHub"} url={"github.com/tymonaghan"} />
        <IDCard title={"LinkedIn"} url={"linkedin.com/in/tyler-monaghan-dev"} />
      </div>
    </div>
  );
};

export default Home;
