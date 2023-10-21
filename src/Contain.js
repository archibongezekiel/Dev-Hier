import React from "react";
import Navbar from "./Nav";
import Selection from "./Selection";
import Main from "./Main";
import "./style.css";
function App(params) {
  const style = {
    width: "700px",
    margin: "auto",
  };
  return (
    <div style={style}>
      <Navbar />
      <Selection />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          whiteSpace: "wrap",
          overflow: "scroll",
          padding: "10px",
        }}
      >
        <Main
          photos="ezekiel1.jpeg"
          rate="5.0"
          levels="(6) •"
          country="Nigeria"
          about="Life lesson with Ezekiel Archibong"
          prices="From 300k"
        />{" "}
        <Main
          photos="charles.png"
          rate="10.0"
          levels="(10) •"
          country="Nigeria"
          about="Life lesson with Charles Archibong"
          prices="From 500k"
        />{" "}
        <Main
          photos="richard.jpeg"
          rate="9.0"
          levels="(8) •"
          country="Nigeria"
          about="Life lesson with Richard Ingwe"
          prices="From 450k"
        />
      </div>
    </div>
  );
}
export default App;
