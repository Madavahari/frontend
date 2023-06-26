import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: "/Images/clouds.jpg",
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=56a4a7c03031d0735b167864e6439c4f&&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main == "Clouds") {
            imagePath = "/Images/clouds.jpg";
          } else if (res.data.weather[0].main == "Clear") {
            imagePath = "/Images/clear.jpg";
          } else if (res.data.weather[0].main == "Rain") {
            imagePath = "/Images/rain.jpg";
          } else if (res.data.weather[0].main == "Drizzle") {
            imagePath = "/Images/drizzle.jpg";
          } else if (res.data.weather[0].main == "Mist") {
            imagePath = "/Images/mist.jpg";
          } else {
            imagePath = "/Images/clouds.jpg";
          }

          console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError("");
        })
        .catch((err) => {
          if (err.response.status == 404) {
            setError("Invalid City Name");
          } else {
            setError("");
          }
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>
            <img src="/images/search.jpg" onClick={handleClick} alt="" />
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="winfo">
          <img src="/Images/clouds.jpg" alt="" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src="/images/humidity.jpg"></img>
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="/images/wind.jpg"></img>
              <div className="wind">
                <p>{Math.round(data.speed)}kmph</p>
                <p>wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;