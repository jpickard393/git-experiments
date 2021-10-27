import './App.css';
import React from 'react';

// create context and put the result in a vaklriable called VehicleContext
export const VehicleContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* Use Vehicle context.provider to wrap components that will use it */}
      {/* Set initial value */}
      <VehicleContext.Provider value="Peugeot">
        <Vehicle />
      </VehicleContext.Provider>
    </div>
  );
}


// now uses useContext hook.
const Vehicle = () => {
  const value = React.useContext(VehicleContext);
  return <h1>{value}</h1>;

  // return (
  //   <VehicleContext.Consumer>
  //     {/* Use the passed down value from the Vehicle context */}
  //     {value => <h1>{value}</h1>}
  //   </VehicleContext.Consumer>
  // );
};

export default App;
