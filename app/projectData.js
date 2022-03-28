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
        "A video demo is available on the project repo README! POSEle is a mobile game developed in React Native. This was a group project that I completed with my peers at Fullstack Academy: Smit Patel, Yehoon (Luke) Joo, and John Arroyo. In this project, we emphasized building a complete, usable product without errors or crashes. We conducted beta testing and released a progressive web app version of the game all within about 2.5 weeks.",
      iconUrl: "/posele-icon.png",
      technologies: ["react", "expo", "firebase", "tensorflow", "netlify"],
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
      longDescription:
        "House of Plants is an e-commerce website design. This was a group project that I completed with my peers at Fullstack Academy: Ryan Slattery, Alston White, and Elstan Lewis. Highlights of this project include the interactive product cart (that persists for logged-in users), product filters, and the ability to log in as admin to edit inventory items and quantities.",
      iconUrl: "/hop-icon.png",
      technologies: ["react", "firebase", "bootstrap", "postgres", "heroku"],
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
      longDescription:
        "Ice Resurfacer is a game that I developed using the Phaser 3 JS game framework. This was a solo project and my goal was to do something lighthearted and different. I love hockey and watching the ice resurfacer at work is always mesmerizing, so this seemed like a great way to try something new. Phaser really made it easy to build this game and I hope to add more to it in the future! PLEASE NOTE a keyboard is required to play this game.",
      iconUrl: "/ice-icon.png",
      technologies: ["javascript", "html5", "heroku"],
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
      longDescription:
        "StudyBuddy is an app to help students organize their sources and notes when conducting research. I developed this app individually and it's one of the first apps I developed independently (no templates or walkthroughs used) in JavaScript. The idea for this app came from my experience as an educator, where I saw a disconnect between students' everyday use of technology and their ability to use that technology in academic settings.",
      iconUrl: "/studybuddy-icon.png",
      technologies: ["react", "express", "bootstrap", "postgres", "heroku"],
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
      longDescription:
        "SOTU-db (State of the Union Database) is a web-based tool to search and conduct sentiment analysis computations on the texts of US Presidents' annual State of the Union addresses. I built this project from scratch on a Linux system running an Apache server, using PHP to connect to the R server that conducts the textual computations on the backend. I had no formal training in any of these technologies at the time, and it shows! I would love to re-build this project again on a modern JS-based stack! ",
      iconUrl: "/sotu-db-icon.png",
      technologies: ["apache", "php", "r", "html5"],
    },
    {
      name: "Development Portfolio",
      slug: "dev-portfolio",
      repo: "https://github.com/tymonaghan/dev-portfolio",
      site: "http://portfolio.tylermonaghan.dev/",
      type: "Individual",
      imageUrl: "/biopic-400w.jpg",
      alt: "a headshot of a man smiling at the camera.",

      description: "The portfolio site you're viewing right now.",
      longDescription:
        "I built this portfolio site as a quick and simple way to show off my software development portfolio to others, especially prospective employers. It is built using React and Tailwind CSS, which I used here for the first time.",
      iconUrl: "/favicon.ico",
      technologies: ["javascript", "react", "tailwind", "netlify"],
    },
  ],
};

export default projectData;
