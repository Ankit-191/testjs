import React, { useState } from "react";

const QuestionOne = () => {
  const [tableData, setTableData] = useState({
    starttable: "",
    endtable: "",
  });
  function tableshow() {
    let s = tableData.starttable;
    let e = tableData.endtable;
    let result;
    for (let i = s; i <= e; i++) {
      for (let j = 1; j <= 10; j++) {
        let tabledata = i * j;
        result = i + "*" + j + "=" + tabledata;
        console.log(result);
      }
    }
  }
  return (
    <div>
      <h2>Question1</h2>
      <h5>Print 2 to 25 Table using for loop</h5>
      <input
        type="number"
        placeholder="Start Table"
        onChange={(e) =>
          setTableData({
            ...tableData,
            starttable: e.target.value,
          })
        }
      />
      <input
        type="number"
        placeholder="End Table"
        onChange={(e) =>
          setTableData({
            ...tableData,
            endtable: e.target.value,
          })
        }
      />
      <button onClick={tableshow}>Submit</button>
      <p>console open</p>
    </div>
  );
};

export default QuestionOne;
