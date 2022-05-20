import { Link } from "react-router-dom";

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
];

export const Home = () => {
  return (
    <>
      <h1>List Of All Features</h1>
      <ul className="list-group">
        {dataUrl.map((item) => (
          <Link to={`${item.url}`} key={item.id}>
            <li className="list-group-item">{item.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
