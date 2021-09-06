import React, { createContext, useState } from "react";

export const FuelPriceContext = createContext();

const FuelPriceContextProvider = (props) => {
    const [fuelPrice, setFuelPrice] = useState('');

    return (
        <FuelPriceContext.Provider value={{fuelPrice, setFuelPrice}}>
            {props.children}
        </FuelPriceContext.Provider> 
    )
}

export default FuelPriceContextProvider;