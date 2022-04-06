import logo from "./logo.svg";
import "./App.css";

import React from "react";

function App() {
  const [cards, setcards] = React.useState([1, 2,34,67, 3, 4, 56, 7]);
  const cardsList = cards.map((item,index) => {
    return (
      <div class="card">
        <div class={`container ${(index===3 || index===4) ? "large-cards" : ""}`}  id={index}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <header className="App-header">Hello</header>{" "}
      <div className="body">

      </div>
      <div style={{display:'flex', justifyContent:'right',flexDirection:'row', flexWrap:'wrap',width:'800px'}}>
      {cardsList}
      </div>
      
    </div>
  );
}

export default App;
