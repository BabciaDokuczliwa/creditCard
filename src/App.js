import React from "react";
import CreditCardTool from "./CreditCard.js";

function App() {
  const cardInfo = {
    personName: "Izabela Nowak",
    expirationDate: "08/23",
    creditCardNumber: "1234  5678 9000 1234 4567",
    bankName: "Sparkasse, Inc.",
  };
  return (
    <div className="App">
      <h1>My React App </h1>
      <CreditCardTool cardInfo={cardInfo} />
    </div>
  );
}

export default App;
