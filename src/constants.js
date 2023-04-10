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

// - - - - - - - - - - - - - - - - - - - - NAVBAR SECTION - - - - - - - - - - - - - - - - - - - -

export const NAVBAR_LINKS = [
  {
    num: "0.1 ",
    section: "About",
    href: "#about",
  },
  {
    num: "0.2 ",
    section: "Skills",
    href: "#skills",
  },
  {
    num: "0.3 ",
    section: "Proyects",
    href: "#proyects",
  },
  {
    num: "0.4 ",
    section: "Contact",
    href: "#contact",
  },
];

// - - - - - - - - - - - - - - - - - - - - - HERO SECTION - - - - - - - - - - - - - - - - - - - - -

export const HERO_CONTENT = {
  span: "Hi, my name is",
  h1: "Josue Salas.",
  h2: "Front-end developer.",
  p: "Using the latest technologies and best practices, I develop responsive and engaging web apps that provide a seamless user experience.",
};

// - - - - - - - - - - - - - - - - - - - - - ABOUT SECTION - - - - - - - - - - - - - - - - - - - - -

export const ABOUT_CONTENT = {
  h2: {
    num: "01.",
    title: "About me",
  },
  p_1: "Hello, I'm Josue Salas, a self-taught front-end developer, residing in Santa Cruz de la Sierra. I'm deeply passionate about technology and creating solutions to complex problems that are both elegant and efficient.",
  p_2: "My interest in the field of technology started at an early age, and over the years, I have been continuously expanding my knowledge and honing my skills to become a proficient developer. As a self-taught developer, I understand the importance of discipline and hard work.",
};

// - - - - - - - - - - - - - - - - - - - - - SKILLS SECTION - - - - - - - - - - - - - - - - - - - - -

export const SKILLS_CONTENT = {
  title: {
    h2: {
      num: "02.",
      title: "Skills",
    },
  },
  body: {
    p: "I'm constantly seeking out new challenges to improve my abilities, and I'm always eager to explore new technologies and frameworks. I believe that self-motivation and the willingness to learn are crucial attributes that every successful developer must possess, and I strive to embody these qualities in everything that I do.",
  },
  cards: [
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
  ],
};

// - - - - - - - - - - - - - - - - - - - - PROYECTS SECTION - - - - - - - - - - - - - - - - - - - - -

export const PROJECTS_CONTENT = {
  title: {
    h2: {
      num: "03.",
      title: "Projects",
    },
  },
  projects: [
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
      link: "https://rick-morty-josalas21.vercel.app",
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
      link: "https://ecommerce-product-josalas21.vercel.app",
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
      link: "https://portfolio-josalas21.vercel.app",
      img: portfolio_page_img,
    },
  ],
};

// - - - - - - - - - - - - - - - - - - - - - CONTACT SECTION - - - - - - - - - - - - - - - - - - - -

export const CONTACT_CONTENT = {
  h2: {
    num: "04.",
    title: "Get in touch",
  },
  p_1: "I'm always interested in hearing from people who want to discuss potential collaboration or job opportunities.",
  p_2: "If you're interested in working together or just want to say hello, please feel free to get in touch! You can reach me at josalasrod21@gmail.com or connect with me on linkedin.",
  p_3: "Looking forward to hearing from you!",
  emoji: "🚀",
};
