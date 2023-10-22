import React, { useState } from "react";

const QuestionSeven = () => {
  const [totalSum, setTotalSum] = useState("");
  const [tableData, setTableData] = useState({
    enterValue: "",
    powers: "",
  });
  let x = tableData.enterValue;
  let y = tableData.powers;
  let cub = x ** y;
  function datashow() {
    setTotalSum("Total value = " + cub);
  }
  return (
    <div>
      <h2>QuestionSeven</h2>
      <h5>
        Find a power of a value if Power is 2 <sup>3</sup> than the answere is =
        8
      </h5>
      <input
        type="number"
        placeholder="value"
        onChange={(e) =>
          setTableData({
            ...tableData,
            enterValue: e.target.value,
          })
        }
      />
      <input
        type="number"
        placeholder="power"
        onChange={(e) =>
          setTableData({
            ...tableData,
            powers: e.target.value,
          })
        }
      />
      <button onClick={datashow}>Submit</button>
      <p>{totalSum}</p>
    </div>
  );
};

export default QuestionSeven;
