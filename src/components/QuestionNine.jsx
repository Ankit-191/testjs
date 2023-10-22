import React, { useState } from "react";

const QuestionNine = () => {
  const [totalSum, setTotalSum] = useState("");
  let array = [9, 23, 6, 8, 4, 10, 6];
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  function totalshow() {
    setTotalSum(total);
  }
  return (
    <div>
      <h2>QuestionNine</h2>
      <h5>find sum of an array = [9,23,6,8,4,10,6]</h5>
      <button onClick={totalshow}>Total</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionNine;
