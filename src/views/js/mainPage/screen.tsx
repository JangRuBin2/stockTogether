import React, { useState } from "react";
import Header from "../../../../utils/Components/header";
import Nav from "../../../../utils/Components/nav";
import Main from "./main";

interface ScreenProps {
  title: string;
}

const ScreenTwo: React.FC = () => {
  const [title, setTitle] = useState("홈");

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className="container">
      <Header title={title} />
      <Main />
      <Nav changeTitle={changeTitle} />
    </div>
  );
};

export default ScreenTwo;
