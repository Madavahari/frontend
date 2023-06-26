import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.css';

function Welcome() {
  const style = {
    "background-image": `url("images/akhil.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "center",
    height: "100%",
    width: "100%",
  };
  return <div style={style}></div>;
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    navigate("/Login");
  };
  return (
     <div>
      <h1 className="title">WELCOME TO WEATHER CHECK</h1>
      <h1> The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to ten days in future and hourly weather forecast.</h1>
      <Welcome />
      <div className="login">
      <Button className="akhil" display="flex" alignitems="right" variant="contained" onClick={handleLogin}>
        Login 
      </Button>
     <Button className="akhil" display="flex" alignitems="right" variant="contained" onClick={handleLogin}>
        Sign Up
      </Button>
      
      
      </div>
    </div>
  
  );
}
export default App;