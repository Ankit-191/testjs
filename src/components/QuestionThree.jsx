import React, { useState } from "react";
const QuestionThree = () => {
  const [totalSum, setTotalSum] = useState("");
  let n = 5;
  let x = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j || i + j == n + 1) {
        x += "*";
      } else {
        x += " ";
      }
    }
    x += "\n";
  }
  function datashow() {
    console.log(x);
  }
  return (
    <div>
      <h2>QuestionThree</h2>
      <h5>Print star if n=3 than using loop</h5>
      <button onClick={datashow}>Submit</button>
      <p>{totalSum}</p>
      <p>console open</p>
    </div>
  );
};

export default QuestionThree;
