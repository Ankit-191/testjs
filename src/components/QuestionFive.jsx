import React, { useState } from "react";

const QuestionFive = () => {
  const [totalSum, setTotalSum] = useState("");
  let totalvowel = 0;
  function vowelCheck(n) {
    let x = n.toLowerCase().split("");
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowel.length; i++) {
      for (let j = 0; j < x.length; j++) {
        if (vowel[i] === x[j]) {
          totalvowel++;
        }
      }
    }
  }
  vowelCheck("Palvi go to delhi");
  function datashow() {
    setTotalSum("Total Vowel = " + totalvowel);
  }
  return (
    <div>
      <h2>QuestionFive</h2>
      <h5>
        Find how many vowels are present in this string "Palvi go to delhi"
      </h5>
      <button onClick={datashow}>Submit</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionFive;
