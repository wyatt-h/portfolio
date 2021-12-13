import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import "./styles/style.css";

const App = () => {
  const [poem, setPoem] = useState({
    title: "",
    author: "",
    lines: [],
    linecount: 0,
  });
  useEffect(() => {
    fetch("https://poetrydb.org/random/1")
      .then((res) => res.json())
      .then((data) => {
        if (data[0].lines.length > 15) {
          setPoem({ ...data[0], lines: data[0].lines.slice(0, 15) });
        } else {
          setPoem(data[0]);
        }
      });
  }, []);
  return (
    <div className="poetry-div">
      <h1 className="title">{poem.title}</h1>
      <h3 className="author">{poem.author}</h3>
      {poem.lines.map((line, index) => (
        <p key={index} className="line">
          {line}
        </p>
      ))}
    </div>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
