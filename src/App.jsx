import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const handleGreeting = () => {
    setGreeting("สวัสดี!");
  };

  const handleGreeting2 = () => {
    setGreeting("Hi!");
  };

  const handleGreeting3 = () => {
    setGreeting("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={handleGreeting}>สวัสดี!</button>
        <button onClick={handleGreeting2}>Hi!</button>
        <button onClick={handleGreeting3}>你好!</button>
      </div>
    </div>
  );
}

export default App;
