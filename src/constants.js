import product_page_img from "./assets/imgs/product-page.png";
import portfolio_page_img from "./assets/imgs/portfolio-page.png";
import rickmorty_page_img from "./assets/imgs/rickmorty-page.png";
import javascript from "./assets/svgs/javascript.svg";
import python from "./assets/svgs/python.svg";
import css from "./assets/svgs/css.svg";
import tailwind from "./assets/svgs/tailwind.svg";
import react from "./assets/svgs/react.svg";
import redux from "./assets/svgs/redux.svg";
import git from "./assets/svgs/git.svg";
import wordpress from "./assets/svgs/wordpress.svg";
import react_router from "./assets/svgs/react_router.svg";
import react_query from "./assets/svgs/react_query.svg";
import data from "./assets/svgs/data.svg";

export const PROYECTS = [
  {
    title: "Rick and Morty",
    description:
      "This is a web application that displays information about characters, episodes, and locations from the popular TV show Rick and Morty.",
    techs: [
      { name: "ReactJS", img: react },
      { name: "React Query", img: react_query },
      { name: "React Router", img: react_router },
      { name: "TailwindCSS", img: tailwind },
      { name: "Rick and Morty API", img: data },
    ],
    github: "https://github.com/JosueSalasR/rick-morty",
    img: rickmorty_page_img,
  },
  {
    title: "Ecommerce Product Page",
    description:
      "This is a product page built with React. It showcases a product with an image, a title, a price, and a description. Users can add the product to their cart and see the total price of their cart.",
    techs: [
      { name: "ReactJS", img: react },
      { name: "TailwindCSS", img: tailwind },
    ],
    github: "https://github.com/JosueSalasR/ecommerce-product-page",
    img: product_page_img,
  },
  {
    title: "Portfolio Page",
    description:
      "This is my personal front-end portfolio, developed using React. Here, you'll find a showcase of my skills and projects in web interface development.",
    techs: [
      { name: "ReactJS", img: react },
      { name: "TailwindCSS", img: tailwind },
    ],
    github: "https://github.com/JosueSalasR/portfolio-web",
    img: portfolio_page_img,
  },
];

export const SKILLS = [
  {
    title: "Programming Languages",
    techs: [
      {
        tech: "JavaScript (ES6)",
        img: javascript,
      },
      {
        tech: "Python",
        img: python,
      },
    ],
  },
  {
    title: "Styling",
    techs: [
      {
        tech: "CSS/Sass",
        img: css,
      },
      {
        tech: "TailwindCSS",
        img: tailwind,
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    techs: [
      {
        tech: "React",
        img: react,
      },
      {
        tech: "Redux",
        img: redux,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    techs: [
      {
        tech: "Git",
        img: git,
      },
      {
        tech: "Wordress",
        img: wordpress,
      },
    ],
  },
];
