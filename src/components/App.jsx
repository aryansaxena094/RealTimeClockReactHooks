import React from "react";

function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  
  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  
  setInterval(updateTime, 1000);
  
  function handleClick() {
    setTime(new Date().toLocaleTimeString());
  }
  
  return (
    <div className="container">
    <h1>{time}</h1>
    <button onClick={handleClick}>Get Time</button>
    </div>
    );
  }
  
  export default App;
  