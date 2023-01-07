import React, { ReactNode } from "react";

const GenericsTypescript = () => {
  return (
    <>
      <h3>STRING</h3>
      <List
        items={["Aman", "Rahul", "Rafa"]}
        render={(item: string) => <>{item}</>}
      />
      <h3>NUMBERS</h3>
      <List items={[1, 2, 3]} render={(item:number) => <>{item}</>} />

      <h3>OBJECTS</h3>
      <List
        items={[
          { name: "hello", id: 1 },
          { name: "world", id: 2 },
        ]}
        render={(item: { name: string; id: number }) => <>{item.id} -- {item.name}</>}
      />
    </>
  );
};

// here ListItem is genrics as we are not defining type only when using we define
function  List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default GenericsTypescript;
