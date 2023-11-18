import React, { useContext } from "react";
import { Ourcontext } from "./Myapp";
import { Col, Row } from "react-bootstrap";
const Cardsecond = () => {
  const { cardData, cardClose } = useContext(Ourcontext);
  return (
    <div>
      <Row
        className={`p-2 position-absolute top-0 start-0 bg-info w-100 vh-100 ${cardData.d_none}`}
      >
        <Col lg={3}>
          <img src={cardData.cardimg} alt="" className="w-100" />
        </Col>
        <Col lg={3}>
          <div className="p-3">
            <h3>{cardData.heading}</h3>
            <p>{cardData.para}</p>
            <p>{cardData.para2}</p>
            <button onClick={cardClose}>Button Close</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cardsecond;
