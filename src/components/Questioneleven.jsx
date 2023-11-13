import React, { useState } from "react";

const Questioneleven = () => {
  const [first, setfirst] = useState([{ numbers: "1" }, { numbers: "2" }]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const btnData = [
    {
      btnnumber: "1",
    },
    {
      btnnumber: "2",
    },
    {
      btnnumber: "3",
    },
    {
      btnnumber: "4",
    },
    {
      btnnumber: "5",
    },
  ];

  function xyz(n) {
    const r = first.some((item) => n.btnnumber === item.numbers);
    if (r) {
      console.log(r);
    } else if (!selectedNumbers.includes(n.btnnumber)) {
      setSelectedNumbers([...selectedNumbers, n.btnnumber]);
    }
  }

  return (
    <div>
      <div>
        {btnData.map((n) => {
          return (
            <button key={n.btnnumber} onClick={() => xyz(n)}>
              {n.btnnumber}
            </button>
          );
        })}
      </div>
      <div>
        <p>Numbers: {selectedNumbers.join(", ")}</p>
      </div>
    </div>
  );
};

export default Questioneleven;
