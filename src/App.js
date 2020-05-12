import React, { useState } from "react";
import SharedCard from "./components/SharedCard/SharedCard";
import AddCard from "./components/AddCard/AddCard";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);

  const handleNewData = (newCard) => {
    let newData = [...data, newCard];
    setData(newData);
  };

  return (
    <div className="main">
      <AddCard handleNewData={handleNewData} />
      {data.map((element) => {
        return (
          <SharedCard
            title={element.title}
            text={element.text}
            link={element.link}
          />
        );
      })}
    </div>
  );
};

export default App;
