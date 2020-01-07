import React from "react";
import FloofSection from "./FloofSection";

const App = props => {
  return (
    <div>
      <h1> Floofs of Launch </h1>
      <FloofSection floofs={props.animals.dogs} floofType="Dog" />
      <FloofSection floofs={props.animals.cats} floofType="Cat" />
    </div>
  );
};

export default App;
