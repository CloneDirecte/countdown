import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [dateArretTravail, setDateArretTravail] = useState([]);
  const [dateVacances, setDateVacances] = useState([]);
  useEffect(() => {
    var today = new Date().getTime();
    var oneDay = 24 * 60 * 60 * 1000;
    var arretTravailIntense = new Date("05/26/2022").getTime();
    var vacances = new Date("06/11/2022").getTime();
    setDateArretTravail(
      Math.round(Math.abs((arretTravailIntense - today) / oneDay))
    );
    setDateVacances(Math.round(Math.abs((vacances - today) / oneDay)));
  });
  return (
    <div>
      <div className="arret">
        <h1>Jours avant dernier DS</h1>
        <div className="numbers">
          {Array.from(String(dateArretTravail), Number).map((number) => (
            <div className="number" key={number}>
              <h1 key={number}>{number}</h1>
            </div>
          ))}
          <h1>jours</h1>
        </div>
      </div>
      <div className="arret">
        <h1>Jours avant vacances</h1>
        <div className="numbers">
          {Array.from(String(dateVacances), Number).map((number) => (
            <div className="number" key={number}>
              <h1 key={number}>{number}</h1>
            </div>
          ))}
          <h1>jours</h1>
        </div>
      </div>
    </div>
  );
}
