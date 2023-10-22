import React, { useState } from "react";

const QuestionEight = () => {
  const [totalSum, setTotalSum] = useState("");
  let numbers = [2, 3, 9, -2, -8, 6, 2, 4];
  let first = numbers[0] * numbers[1];
  let v1 = numbers[0];
  let v2 = numbers[1];
  for (let i = 1; i < numbers.length - 1; i++) {
    let sum = numbers[i] * numbers[i + 1];
    if (first < sum) {
      first = sum;
      v1 = numbers[i];
      v2 = numbers[i + 1];
    }
  }
  function totalshow() {
    setTotalSum(
      "first value = " +
        v1 +
        "," +
        " second value = " +
        v2 +
        "," +
        " Total Multiply = " +
        first
    );
  }
  return (
    <div>
      <h2>QuestionEight</h2>
      <h5>Find greater Multiply of an array = [2,3,9,-2,-8,6,2,4] </h5>
      <button onClick={totalshow}>Total</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionEight;
