import { useEffect, useState } from "react";

const FuelCalc = ({fuelPrice, setFuelPrice}) => {
    // const [fuelPrice, setFuelPrice] = useState('');
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
            <div className="formula">
                <h3 className='formula__title'>Koszt przejechania trasy</h3>
                <form className='formula__form'>
                    
                    <label htmlFor="fuel-price" className='formula__label'>Cena paliwa: </label>
                    <div className="formula__input-wrapper">
                        <input type="number" className="formula__input" id='fuel-price' min='0' value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)}/>
                        <span className='formula__input-unit'> ZŁ / L</span>
                    </div>

                    <label htmlFor="range" className="formula__label">Długość trasy</label>
                    <div className="formula__input-wrapper">
                        <input type="number" className="formula__input" min='0' id='range' value={distance} onChange={(e) => setDistance(e.target.value)}/>
                        <span className="formula__input-unit">KM</span>   
                    </div>

                    <label htmlFor="avg" className="formula__label">Średnie spalanie</label>
                    <div className="formula__input-wrapper">
                        <input type="number" className="formula__input" min='0' id='avg' value={avgFuelUsage} onChange={(e) => setAvgFuelUsage(e.target.value)}/>
                        <span className="formula__input-unit">L / 100 KM</span>   
                    </div>

                    <div className="formula__result-section">

                    <span className="formula__result-name">Koszt paliwa: </span>

                        <div className="formula__input-wrapper">
                            <input type="text" className="formula__input result" value={fuelCost} readOnly/>     
                            <span className='formula__input-unit'>ZŁ</span>        
                        </div>         
                    </div>

                </form>                
            </div>

        </div>
     );
}
 
export default FuelCalc;