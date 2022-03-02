const projectData = {
  projects: [
    {
      name: "POSEle",
      slug: "posele",
      repo: "https://github.com/team-posele/posele-app",
      site: "https://www.posele.com",
      type: "Group",
      imageUrl: "/posele-img.png",
      alt: "a screenshot of a cell phone showing Usain Bolt celebrating and a person matching his pose. The screen shows 'match' in large green letters.",
      description:
        "Mobile game where users attempt to match a random daily pose.",
      longDescription:
        "POSEle is a mobile game developed in React Native. This was a group project that I completed with my peers at Fullstack Academy: Smit Patel, Yehoon (Luke) Joo, and John Arroyo. \n\n\n\nIn this project, we emphasized building a complete, usable product without errors or crashes. We conducted beta testing and released a progressive web app version of the game all within about 2.4 weeks.",
      iconUrl: "/posele-icon.png",
      technologies: ["react", "firebase", "tensorflow"],
    },
    {
      name: "House of Plants",
      slug: "house-of-plants",
      repo: "https://github.com/Warp-Speeders-Grace-Shopper/WarpSpeeders_GraceShoppers",
      site: "https://house-of-plants-grace-shopper.herokuapp.com/",
      type: "Group",
      imageUrl: "/HoP-img.png",
      alt: "a screenshot of a website with a green menu bar at the top and images of various houseplants arranged in a grid layout.",
      description:
        "An interactive eCommerce site design with cart and admin features.",
      longDescription: "",
      iconUrl: "/hop-icon.png",
      technologies: ["react", "firebase", "bootstrap", "postgres"],
    },
    {
      name: "Ice Resurfacer",
      slug: "ice-resurfacer",
      repo: "https://github.com/tymonaghan/ice-resurfacer",
      site: "https://ice-resurfacer.herokuapp.com",
      type: "Individual",
      imageUrl: "/ice-resurfacer-img.png",
      alt: "a screenshot of a top-down view of an ice hockey rink with an animated ice-resurfacer machine on the left hand side.",

      description:
        "A top-down action driving game set in the high-stakes world of ice resurfacing.",
      longDescription: "",
      iconUrl: "/ice-icon.png",
      technologies: ["react"],
    },
    {
      name: "StudyBuddy",
      slug: "studybuddy",
      repo: "https://github.com/tymonaghan/studybuddy",
      site: "https://study-hero.herokuapp.com",
      type: "Individual",
      imageUrl: "/study-buddy-img.png",
      alt: "a screenshot of a an app showing various cards with notes and buttons on each card arranged in a rough grid layout.",

      description:
        "A web app for academic researchers to organize their projects, sources, and notes.",
      longDescription: "",
      iconUrl: "/studybuddy-icon.png",
      technologies: ["react", "express", "bootstrap", "postgres"],
    },
    {
      name: "SOTU-db",
      slug: "sotu-db",
      repo: "https://github.com/tymonaghan/sotu-db",
      site: "http://www.sotu-db.com/",
      type: "Individual",
      imageUrl: "/sotu-db-img.png",
      alt: "a screenshot of a an app showing a line chart at the top and a table of entries at the bottom.",

      description:
        "A tool to search and perform sentiment analysis on the texts of US Presidents' State of the Union addresses.",
      longDescription: "",
      iconUrl: "/sotu-db-icon.png",
      technologies: ["apache", "php", "r"],
    },
  ],
};

export default projectData;
