import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLogin = () => {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const handleData = (e) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(loginData);
    await axios.post(`http://localhost:8080/adduser1`, loginData);
    setLoginData({ username: "", password: "" });
    navigate("/BasicTable");
  };

  return (
    <Container>
      <Box>
        <h1>ADD LOGIN</h1>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="User Name"
              name="username"
              value={username}
              onChange={handleData}
            />
            <TextField
              label="Password"
              name="password"
              value={password}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="container">
                Add Login
              </Button>
              <Button href="/Home" color="error" variant="contained">
                cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddLogin;