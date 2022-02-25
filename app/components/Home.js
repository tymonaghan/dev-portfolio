import React from "react";
import { IDCard } from ".";

const Home = () => {
  return (
    <div className="w-full p-6 ">
      <p>
        Hi, I'm Tyler, a software engineer and digital humanitarian. Welcome to
        my digital development portfolio!
      </p>
      <IDCard title={"GitHub"} url={"github.com/tymonaghan"} />
      <IDCard title={"LinkedIn"} url={"linkedin.com/in/tyler-monaghan-dev"} />
    </div>
  );
};

export default Home;
