import React from "react";
import { useState } from "react";

const QuestionTwo = () => {
  const [outputdata, setOutputdata] = useState("d_none");
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    rollno: "",
    gender: "",
  });
  let stuData = [
    {
      firstName: inputValue.firstname,
      lastName: inputValue.lastname,
      rollNo: inputValue.rollno,
      gender: inputValue.gender,
    },
  ];
  function inputdata() {
    setOutputdata("d_block");
  }
  return (
    <div>
      <h2>QuestionTwo</h2>
      <h5>
        Create a form and save data in one state and data has show on under the
        form
      </h5>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) =>
          setInputValue({ ...inputValue, firstname: e.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) =>
          setInputValue({
            ...inputValue,
            lastname: e.target.value,
          })
        }
      />
      <br />
      <input
        type="number"
        placeholder="Roll No"
        onChange={(e) =>
          setInputValue({
            ...inputValue,
            rollno: e.target.value,
          })
        }
      />
      <br />
      <div
        onChange={(e) =>
          setInputValue({ ...inputValue, gender: e.target.value })
        }
      >
        <input type="radio" name="Gender" value="Male" />
        Male
        <input type="radio" name="Gender" value="Female" />
        Female
      </div>
      <button onClick={inputdata}>Save</button>
      <table border={1} width={1000} className={outputdata}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Roll No</th>
          <th>Gender</th>
        </tr>
        {stuData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.rollNo}</td>
              <td>{data.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default QuestionTwo;
