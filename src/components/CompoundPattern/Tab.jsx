import React, { createContext, useContext, useState } from "react";
import "./CompoundPattern.css";

const TabContext = createContext();

const Tab = ({ children, value, onChange }) => {
  return (
    <div>
      <TabContext.Provider value={{ value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

const TabHeads = ({ children }) => {
  return <div className="heads">{children}</div>;
};

const TabItem = ({ label, index, children }) => {
  const { value, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`item ${index === value ? "active" : null}`}
    >
      {label}
    </div>
  );
};

const TabContentWrapper = ({ children }) => {
  return <div className="contentWraper">{children}</div>;
};

const TabContent = ({ children, index }) => {
  const { value } = useContext(TabContext);
  return value === index ? <div>{children}</div> : null;
};

Tab.Heads = TabHeads;
Tab.Item = TabItem;
Tab.ContentWrapper = TabContentWrapper;
Tab.Content = TabContent;

export default Tab;
