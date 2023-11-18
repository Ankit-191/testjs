import React, { useState } from "react";

const Searchbar = () => {
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  const [filteredList, setFilteredList] = useState(itemList);
  const filterBySearch = (e) => {
    // Access input value
    const trgetvalue = e.target.value;
    // Create copy of item list
    let updatedList = [...itemList];
    // Include all elements which includes the search trgetvalue
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(trgetvalue.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return (
    <>
      <div className="search-text">Search:</div>
      <input id="search-box" onChange={filterBySearch} />
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Searchbar;
