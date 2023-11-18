import React, { useState } from 'react'

const SecondTodo = () => {
const [getindex, setGetindex] = useState(-1)
    const [formdata, setFormdata] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        Password: '',
        confirmPassword: '',
      });
      const [tableData, setTableData] = useState([]);
      function handleSubmit(event) {
        event.preventDefault();
        // alert show
        if (
            !formdata.firstName ||
            !formdata.lastName ||
            !formdata.Email ||
            !formdata.Password ||
            !formdata.confirmPassword
          ) {
            alert('Please fill in all fields');
            return; // Prevent form submission
          }
          if(formdata.Password !==formdata.confirmPassword){
            setTableData(false);
            alert("Enter Confirm Password")
          }
          console.log(getindex)
          if (getindex === -1) {
            // If the index is -1, add new data to tableData
            setTableData([...tableData, formdata]);
          } else {
            // If the index exists, update the data at that index in tableData
            const updatedTableData = [...tableData]; // Create a copy of tableData
            updatedTableData[getindex] = formdata; // Update the data at the specified index
            setTableData(updatedTableData); // Update tableData state with the modified array
          }
        // Clear the form after submission
        setFormdata({
          firstName: '',
          lastName: '',
          Email: '',
          Password: '',
          confirmPassword: '',
        });
      }
    //   add delete btn
      const handleRemove = (index) => {
        const newtable = [...tableData]; // Get the data of the selected row
        newtable.splice(index, 1); //splice use delete row
        setTableData(newtable);
      };
    //   add edit btn
      const handleEdit = (index) => {
       setGetindex(index)
        const editedData = tableData[index]; // Get the data of the selected row
        setFormdata({
          firstName: editedData.firstName,
          lastName: editedData.lastName,
          Email: editedData.Email,
          Password: editedData.Password,
          confirmPassword: editedData.confirmPassword,
        });
      };

  return (
    <div>
         <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formdata.firstName}
          onChange={(e) =>
            setFormdata({ ...formdata, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formdata.lastName}
          onChange={(e) =>
            setFormdata({ ...formdata, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={formdata.Email}
          onChange={(e) => setFormdata({ ...formdata, Email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formdata.Password}
          onChange={(e) =>
            setFormdata({ ...formdata, Password: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formdata.confirmPassword}
          onChange={(e) =>
            setFormdata({ ...formdata, confirmPassword: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <table border={1} width={1300}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.Email}</td>
              <td>{data.Password}</td>
              <td>{data.confirmPassword}</td>
              <td><button onClick={() => handleRemove(index)}>Delete</button></td>
              <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SecondTodo