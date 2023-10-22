import React, { useState } from "react";

const QuestionSix = () => {
  const [totalSum, setTotalSum] = useState("");
  const numbers = [9, 11, 12, 13, 14, 15, 18];
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  function datashow() {
    setTotalSum(
      "even numbers: " +
        evenCount +
        " " +
        " odd numbers: " +
        oddCount
    );
  }
  return (
    <div>
      <h2>QuestionSix</h2>
      <h5>
        Fin hom many odd and even number are present in this array =
        [9,11,12,13,14,15,18]
      </h5>
      <button onClick={datashow}>Submit</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionSix;
