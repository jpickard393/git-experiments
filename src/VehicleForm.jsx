import React from "react";
import { VehicleContext } from "./App";

const VehicleForm = () => {
  const car = React.useContext(VehicleContext);
  return (
    <div>
      <h1>Vehicle</h1>
      <h2>{car.make}</h2>
      <h3>{car.model}</h3>
      <h4>{car.colour}</h4>
    </div>
  );
};
export default VehicleForm;
