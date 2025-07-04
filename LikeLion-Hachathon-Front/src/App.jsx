import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUp from "./SignUp/SignUp";
import MainPage from "./MainPage/MainPage";
import WriteWill from "./WriteWill/WriteWill";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/writewill" element={<WriteWill />} />
      </Routes>
    </Router>
  );
}

export default App;