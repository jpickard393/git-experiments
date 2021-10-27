import React from "react";
import { VehicleContext } from "./App";

const Vehicle = () => {
  const value = React.useContext(VehicleContext);
  return <h1>{value}</h1>;
};

export default Vehicle;
