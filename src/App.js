import FuelCalc from './components/FuelCalc';
import FuelPrices from './components/FuelPrices';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [fuelPrice, setFuelPrice] = useState('');

  return (
    <div className="app">
      <Navbar />
      <div className="home">
        <FuelCalc fuelPrice={fuelPrice} setFuelPrice={setFuelPrice}/>
        <FuelPrices setFuelPrice={setFuelPrice}/>

        <section className="blog">
          <h2 className="blog__title">Jak zmniejszyc spalanie paliwa?</h2>
          <article className="article">
            <h3 className="article__title"> 1. Wyłączaj silnik podczas postojów </h3>
            <p className="article__content">
              Silnik pracujący na tzw. "luzie" zużywa około <b>0,7 litra</b> paliwa na godzinę! Warto więc w czasie postoju, oczekiwania na przejeżdżający pociąg czy stania w korku wyłączać silnik.
            </p>
          </article>  
          <article className="article">
            <h3 className="article__title"> 2. Hamuj silnikiem</h3>
            <p className="article__content">
              Gdy hamujemy silnikiem samochód nie spala paliwa oraz zmiejszamy zużycie hamulców. Jeśli więc dojeżdżamy do skrzyżowania warto puścić nogę z gazu i zredukować bieg. Nasz portfel nam za to podziękuje!
            </p>
          </article>  
          <article className="article">
            <h3 className="article__title"> 3. Płynna jazda</h3>
            <p className="article__content">
              Staraj się unikać zmiany tempa jazdy. W czasie zwiększania prędkości silnik zużywa najwięcej paliwa. Niepotrzebne gwałtowne hamowanie i przyspieszanie tylko zwiększy zużycie paliwa.
            </p>
          </article>  
          <article className="article">
            <h3 className="article__title"> 4. Właściwie napompuj opony</h3>
            <p className="article__content">
              Ciśnienie niższe już o 0,5 bara niż zaleca producent powoduje zwiększenie się zużycia paliwa o 5% w górę. Warto kontrolować je regularnie, a dodatkowym atutem będa lepsze właściwości trakcyjne i większy poziom bezpieczeństwa
            </p>
          </article>  
          <article className="article">
            <h3 className="article__title"> 5. Wyłącz klimatyzację</h3>
            <p className="article__content">
              Samochód do produkcji prądu zużywa paliwo. Tak więc prąd nie jest darmowy. Im więcej go zużywamy tym bardziej rośnie zużycie paliwa. Wyłączmy więc klimatyzację i podgrzewane fotele jeżeli nie są one konieczne.
            </p>
          </article>  
        </section>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
