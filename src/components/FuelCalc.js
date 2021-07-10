import { useEffect, useState } from "react";

const FuelCalc = () => {
    const [fuelPrice, setFuelPrice] = useState('');
    const [distance, setDistance] = useState('');
    const [avgFuelUsage, setAvgFuelUsage] = useState('');
    const [fuelCost, setFuelCost] = useState('');

    useEffect(() => {
        if (fuelPrice && distance && avgFuelUsage) {
            setFuelCost(() => {
                let price = ((distance * (avgFuelUsage / 100)) * fuelPrice);
                price = price.toFixed(2);
                if (price < 0) {
                    return '';
                } else if (price >=0) {
                    return price;
                }
            })            
        } else {
            setFuelCost('');
        }
    }, [fuelPrice, distance, avgFuelUsage])

    return ( 
        <div className="calculator">
            <div className="gas-price">
                <i className="fas fa-gas-pump fa-lg"/>
                <label htmlFor="fuel-price" className='gas-price__label'>Cena za 1l paliwa: </label>
                <input type="number" className="gas-price__input" id='fuel-price' min='0' value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)}/>
                <span className='gas-price__currency'> zł</span>
            </div>
            <div className="formula">
                <h3 className='formula__title'>Koszt przejechania trasy</h3>
                <form className='formula__form'>
                    <label htmlFor="range" className="formula__label">Długość trasy w km:</label>
                    <input type="number" className="formula__input" min='0' id='range' value={distance} onChange={(e) => setDistance(e.target.value)}/>

                    <label htmlFor="avg" className="formula__label">Średnie spalanie l/100 km:</label>
                    <input type="number" className="formula__input" min='0' id='avg' value={avgFuelUsage} onChange={(e) => setAvgFuelUsage(e.target.value)}/>

                    <div className="formula__result-section">
                        <span className="formula__result-name">Koszt paliwa: </span>
                        <input type="text" className="formula__result" value={fuelCost} readOnly/>     
                        <span>zł</span>             
                              
                    </div>

                </form>                
            </div>

        </div>
     );
}
 
export default FuelCalc;