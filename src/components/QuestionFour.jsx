import React, { useState } from "react";

const QuestionFour = () => {
  const [totalSum, setTotalSum] = useState("");
  const words = ["Muskan", "Neha", "Palvi", "Keshav"];
  let smallestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < smallestWord.length) {
      smallestWord = words[i];
    }
  }
  function datashow() {
    setTotalSum("Smallest word = " + smallestWord);
  }
  return (
    <div>
      <h2>QuestionFour</h2>
      <h5>
        Find the smallest word in the array = ["Muskan" , "Neha" , "Palvi" ,
        "Keshav"]
      </h5>
      <button onClick={datashow}>Submit</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionFour;
