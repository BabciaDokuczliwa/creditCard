import React from "react";
import "./creditCard.css";

function CreditCardTool(props) {
  return (
    <div className="wrap">
      <div className="top">
        <p className="bank">{props.cardInfo.bankName}</p>
      </div>
      <div className="bottom">
        <div className="number">
          <p>{props.cardInfo.creditCardNumber}</p>
        </div>
        <div className="valid">
          <p className="thru">VALID THRU</p>
          <p className="dataVal">{props.cardInfo.expirationDate}</p>
        </div>
        <div className="ownerName">
          <p>{props.cardInfo.personName}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCardTool;
