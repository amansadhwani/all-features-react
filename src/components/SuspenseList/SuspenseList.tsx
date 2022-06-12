import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

const SuspenseList = () => {
  return (
    <div>
      <Button>Show Toast</Button>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h1>HOME</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h1>Profile</h1>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <h1>Contact</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SuspenseList;
