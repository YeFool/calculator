import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";

const App = () => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const oprtnBtn = ["+", "-", "*", "/", "=", "C",];
  const clearEntry = ["CE"]
  const [result, setResult] = useState("");


  const button = (input) => {
    input === "C" ? setResult("") : input === "=" ? setResult(evaluate(result)) : setResult(result + input)
    
  }

  // const clear = (index) => {
  //   let storedNums = [...numbers]
  //   storedNums.splice(index, -1);
  //   setResult(storedNums)
  // }

  

  return (
    <div className="box">
      <div className="result">
        <p>{result}</p>
      </div>

      
        <div className="numbers"> 
          {numbers.map((index) => {
            return (
              <div key={index}>
                <button onClick={() => button(index)}>{index}</button>
              </div>
            );
          })}
        </div>

        <div className="operations">
          {oprtnBtn.map((index) => {
            return (
              <button className="ops" onClick={() => button(index)} key={index}>
                {index}
              </button>
            );
          })}
          {clearEntry.map((index) => {
            return (
              <button className="clear" onClick={() => button(index)} key={index}>
                {index}
              </button> 
               );
              })}
        </div>
        </div>
  
  );
};

export default App;
