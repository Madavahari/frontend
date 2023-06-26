import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import './Login.css';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    navigate("/BasicTable");
  };
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
    >
      <div>
        <h1>Weather Report </h1>
        <Stack spacing={1} minWidth={300}>
          <TextField type="text" label="UserName" autoFocus />
          <TextField type="text" label="Password" />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={handleLogin}>
            SignUp
          </Button>
        </Stack>
      </div>
    </Box>
  );
}

export default Login;