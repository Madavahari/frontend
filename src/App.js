import React from "react";
import Welcome from "./components/Welcome";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UpdateLogin from "./components/UpdateLogin";
import AddLogin from "./components/AddLogin";
import BasicTable from "./components/BasicTable";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/UpdateLogin" element={<UpdateLogin />}></Route>
        <Route path="/AddLogin" element={<AddLogin />}></Route>
        <Route path="/Update3/:id" element={<UpdateLogin />}></Route>
        <Route path="/BasicTable" element={<BasicTable />}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;