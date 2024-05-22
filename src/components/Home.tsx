import { Link } from "react-router-dom";
import React from 'react'
type dataProps = {
  id: number;
  name: String;
  url: String;
};

const dataUrl: dataProps[] = [
  {
    id: 1,
    name: "Custom Infinite Scroll API",
    url: "/infinite-scroll-custom",
  },
  {
    id: 2,
    name: "Comment Box",
    url: "/comment-box",
  },
  {
    id: 3,
    name: "Custom Infinite Scroll ",
    url: "/infinite-scroll-custom-item",
  },
  {
    id: 4,
    name: "Ecommerce ",
    url: "/ecommerce",
  },
  {
    id: 5,
    name: "Higher Order Component",
    url: "/hoc",
  },
  {
    id: 6,
    name: "Use Memo",
    url: "/usememo",
  },
  {
    id: 7,
    name: "Use Callback",
    url: "/usecallback",
  },
  {
    id: 8,
    name: "Timer Countdown",
    url: "/timercountdown",
  },
  {
    id: 9,
    name: "State Difference",
    url: "/statediff",
  },
  {
    id: 10,
    name: "Single Progress",
    url: "/singleprogress",
  },
  {
    id: 11,
    name: "AutoComplete",
    url: "/autocomplete",
  },
  {
    id: 12,
    name: "React 18",
    url: "/react18",
  },
  {
    id: 13,
    name: "Folder Structure (Accordin)",
    url: "/folderstruct",
  },
  {
    id: 14,
    name: "Splash Screen",
    url: "/splashscreen",
  },
  {
    id: 15,
    name: "Custom Form Validation",
    url: "/formvalidation",
  },
  {
    id: 16,
    name: "Custom Data Hook",
    url: "/customdatahook",
  },
  {
    id: 17,
    name: "Debouncing",
    url: "/deboucing",
  },
  {
    id: 18,
    name: "Throttling",
    url: "/throttling",
  },
  {
    id: 19,
    name: "React Refs",
    url: "/refs",
  },
  {
    id: 20,
    name: "Drag and Drop",
    url: "/drapdrop",
  },
  {
    id: 21,
    name: "Child to Parent Props",
    url: "/childtoparent",
  },
  {
    id: 22,
    name: "temp",
    url: "/temp",
  },
  {
    id: 23,
    name: "Position",
    url: "/position",
  },
  {
    id: 24,
    name: "Use Transition ",
    url: "/useTransition ",
  },
  {
    id: 25,
    name: "Intellegent Lazy Loading ",
    url: "/lazyloading ",
  },
  {
    id: 26,
    name: "Suspense List ",
    url: "/suspenselist ",
  },
  {
    id: 27,
    name: "Generics Typescript ",
    url: "/generics ",
  },
  {
    id: 28,
    name: "Context Api ",
    url: "/contextapi ",
  },
  {
    id: 29,
    name: "Render props",
    url: "/renderprops ",
  },
  {
    id: 30,
    name: "SVG",
    url: "/svg ",
  },
  {
    id: 31,
    name: "D3",
    url: "/d3 ",
  },
  {
    id: 32,
    name: "Use Query",
    url: "/use-query ",
  },
  {
    id: 33,
    name: "Progressive Image",
    url: "/progressive-img ",
  },
  {
    id: 34,
    name: "Web Worker",
    url: "/web-worker",
  },
  {
    id: 35,
    name: "Star Rating",
    url: "/star-rating",
  },
  {
    id: 36,
    name: "AutoComplete",
    url: "/auto-complete",
  },
  {
    id: 37,
    name: "Tic Tic Toe",
    url: "/tic-tic-toe",
  },
  {
    id: 38,
    name: "Compound Pattern",
    url: "/compound-pattern",
  },
  {
    id: 39,
    name: "Custom Pagination",
    url: "/custom-pagination",
  },
  {
    id: 40,
    name: "Context vs Zustand",
    url: "/context_zustand",
  }
];

export const Home = () => {
  return (
    <>
      <h1>Listing Of All Features</h1>
      <ul className="list-group">
        {dataUrl
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
          .map((item) => (
            <Link to={`${item.url}`} key={item.id}>
              <li className="list-group-item">{item.name}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};
