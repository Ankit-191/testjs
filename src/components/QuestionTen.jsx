import React, { useState } from "react";

const QuestionTen = () => {
  const [tableData, setTableData] = useState("");
  function tableshow() {
    let n = tableData;
    for (let i = 1; i <= 100; i++) {
      console.log(i);
      if (i == n) {
        break;
      } else {
        continue;
      }
    }
  }
  return (
    <div>
      <h2>QuestionTen</h2>
      <h5>Print a counting 1 to 100</h5>
      <input
        type="number"
        onChange={(e) => setTableData(e.target.value)}
        placeholder="Stop Counting"
      />
      <button onClick={tableshow}>Submit</button>
      <p>console open</p>
    </div>
  );
};

export default QuestionTen;
