import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Ourcontext } from "./Myapp";
const Cards = () => {
  const { showData, DataMap } = useContext(Ourcontext);
  return (
    <>
      <Row className="m-1">
        {DataMap.map((data, index) => {
          return (
            <Col key={index}>
              <div className="bg-info h-100">
                <img src={data.cardimg} alt={data.imgalt} className="w-100" />
                <div className="p-3">
                  <h3>{data.heading}</h3>
                  <p>{data.para}</p>
                  <p>{data.para2}</p>
                  <button onClick={() => showData(data)}>Get Data</button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cards;
