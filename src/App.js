import "./App.css";
import { useState } from "react";
const App = () => {
  const [x, setx] = useState(0);
  const [color, setColor] = useState("black");

  const AddData = () => {
    setx(x + 1);
    setColor("lime");
  };
  const ReduceData = () => {
    setx(x - 1);
    setColor("red");
  };
  const Reset = () => {
    setx(0);
    setColor("black");
  };

  return (
    <div className="box">
      <h1 className="heading">Counter App</h1>
      <div className="box1">
        <h1 style={{ color: color }}>{x}</h1>
      </div>
      <div className="box2">
        <button className="btn" id="btn1" onClick={ReduceData}>
          Lower Count
        </button>
        <button className="btn" id="btn2" onClick={Reset}>
          Reset
        </button>
        <button className="btn" id="btn3" onClick={AddData}>
          Add Count
        </button>
      </div>
    </div>
  );
};

export default App;
