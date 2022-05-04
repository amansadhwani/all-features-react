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
