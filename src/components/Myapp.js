import React, { createContext, useState } from "react";
import dataimg from "../assets/images/png/image3.png";
import img1 from "../assets/images/png/img1.png";
import img2 from "../assets/images/png/img2.png";
import img3 from "../assets/images/png/img3.png";
export const Ourcontext = createContext();
const Myapp = ({ children }) => {
  const stdNumber = {
    id: 191,
    firstName: "Ankit",
  };
  const [mydata, setMydata] = useState("aaffff");
  const DataMap = [
    {
      cardimg: img1,
      heading: "July 2023",
      para: "Join  us on our next challenge",
      para2: "Working with feedback",
    },
    {
      cardimg: img3,
      heading: "Step three: exploring between our yes and no",
      para: "A week of international curiosity",
      para2: "July 21 - LIOR KRENGEL",
    },
    {
      cardimg: img2,
      heading: "Week five: stepping into our yes with secure expectations",
      para: "Our yes is only human too",
      para2: "June 3 - LIOR KRENGEL",
    },
    {
      cardimg: img3,
      heading: "July 2023",
      para: "Join  us on our next challenge",
      para2: "Working with feedback",
    },
  ];
  const [cardData, setCardData] = useState({
    d_none: "d-none",
    cardimg: "",
    heading: "",
    para: "",
    para2: "",
  });
  function showData(data) {
    setCardData({
      cardimg: data.cardimg,
      heading: data.heading,
      para: data.para,
      para2: data.para2,
    });
  }
  function cardClose() {
    setCardData({
      d_none: "d-none",
    });
  }
  return (
    <>
      <Ourcontext.Provider
        value={{
          stdNumber,
          mydata,
          setMydata,
          dataimg,
          cardData,
          setCardData,
          showData,
          DataMap,
          cardClose,
        }}
      >
        {children}
      </Ourcontext.Provider>
    </>
  );
};

export default Myapp;
