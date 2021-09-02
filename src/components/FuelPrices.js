const FuelPrices = ({fuelPrice, setFuelPrice}) => {
    const fuelPrices = [
        {
            id: 1,
            name: "95",
            price: 5.72,
            currency: 'zł'
        },
        {
            id: 2,
            name: "98",
            price: 5.97,
            currency: 'zł'
        },
        {
            id: 3,
            name: "ON",
            price: 5.44,
            currency: 'zł'
        },
        {
            id: 4,
            name: "ON+",
            price: 5.63,
            currency: 'zł'
        },
        {
            id: 5,
            name: "LPG",
            price: 2.64,
            currency: 'zł'
        }
    ];

    return ( 
        <div className="fuel-prices">
            <h2>Aktualne ceny paliw</h2>
            <div className="fuel-prices__prices">
                {fuelPrices.map(({id, name, price, currency, color}) => {
                   return <Price setFuelPrice={setFuelPrice} name={name} price={price} currency={currency} color={color} key={id}/>
                })}
            </div>
        </div>
     );
}

const Price = ({name, price, currency, color, setFuelPrice}) => {
    return (
        <div className="price" style={{color: color}} onClick={() => setFuelPrice(price)}>
            <span className='price__fuel-name'>{name}</span>
            <span className="price__amount">{price + ' ' + currency}</span>
        </div>
    )
}
 
export default FuelPrices;