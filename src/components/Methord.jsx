import React from "react";
import { useState } from "react";

const Methord = () => {
  const [toAdd, setToAdd] = useState("");
  const [yeardata, setYeardata] = useState("");
  const [secondyear, setSecondyear] = useState("");
  // array merge
  let a = ["A,B,C"];
  let b = ["X,Y,Z"];
  let merge = b.concat("," + a);
  function dataShow() {
    setToAdd(merge);
    setYeardata(years);
    setSecondyear(years2);
  }
  let years = ["Jan,", "Feb,", "March,", "April,", "Jun"];
  // years.splice(4, 0, "May,");
  let changeValue = ["April,"];
  let valueInsert = ["May,"];
  for (let i = 0; i < years.length; i++) {
    if (years[i].includes(changeValue)) {
      years.splice(i + 1, 0, ...valueInsert);
    }
  }
  let years2 = ["Jan,", "Feb,", "March,", "Nov,", "Dec"];
  let elementsToReplace = ["March,"];
  let elementsToInsert = ["April,", "May,", "Jun"];
  for (let i = 0; i < years2.length; i++) {
    if (years2[i].includes(elementsToReplace)) {
      years2.splice(i + 1, 2, ...elementsToInsert);
    }
  }
  return (
    <>
      <div>
        <p>a = {a}</p>
        <p>b = {b}</p>
        <p>Years = "Jan", "Feb", "March", "April", "Jun"</p>
        <p>Years2 = "Jan", "Feb", "March", "Nov", "Dec"</p>
        <button onClick={dataShow}>show</button>
        <p>{toAdd}</p>
        <p>{yeardata}</p>
        <p>{secondyear}</p>
      </div>
    </>
  );
};

export default Methord;
