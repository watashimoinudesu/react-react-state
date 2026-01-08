import "./App.css";
import { useState } from "react";
function App() {
  const [message,setMessage]=useState('');

  function handleClickGreeting(lang){
    setMessage(greetMap[lang] || 'other');
  }

  const greetMap={
    th:'สวัสดี!',
    en:'Hi!',
    cn:'你好!',
  }

  return (
    <div className="App">
      <div className="greeting-container">{message ? message : 'Greeting Message'}</div>
      <div className="buttons">
        <button onClick={()=>handleClickGreeting('th')}>สวัสดี!</button>
        <button onClick={()=>handleClickGreeting('en')}>Hi!</button>
        <button onClick={()=>handleClickGreeting('cn')}>你好!</button>
      </div>
    </div>
  );
}

export default App;
