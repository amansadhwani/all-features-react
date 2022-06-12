import { useState, useTransition } from "react";
import data from "../../temp/data";

const PeopleList = ({ people, highlight, isLoading }: any) => {
  return (
    <>
      <div>{isLoading ? "Loading..." : "Ready"}</div>
      <ol>
        {people.map((name: any, index: any) => (
          <li
            key={index}
            style={{
              color: name.type.toLowerCase().includes(highlight)
                ? "lime"
                : "red",
            }}
          >
            {name.type}
          </li>
        ))}
      </ol>
    </>
  );
};

const Transition = () => {
  const [needle, setNeedle] = useState("");
  const [highlight, setHighlight] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        type="text"
        value={needle}
        onChange={(event) => {
          setNeedle(event.target.value);
          startTransition(() => setHighlight(event.target.value.toLowerCase()));
        }}
      />
      <PeopleList people={data} highlight={highlight} isLoading={isPending} />
    </div>
  );
};

export default Transition;
