import { Link } from "react-router-dom";

type dataProps = {
  id: number;
  name: String;
  url: String;
};

const dataUrl: dataProps[] = [
  {
    id: 1,
    name: "Custom Infinite Scroll",
    url: "/infinite-scroll-custom",
  },
  {
    id: 2,
    name: "Custom Pagination",
    url: "/custom-pagination",
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
