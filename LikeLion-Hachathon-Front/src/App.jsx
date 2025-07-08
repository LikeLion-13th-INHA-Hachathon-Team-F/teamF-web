import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUp from "./SignUp/SignUp";
import MainPage from "./MainPage/MainPage";
import WriteWill from "./WriteWill/WriteWill";
import Modify from "./modify/Modify";
import VisitorRoutes from "./Visitor/VisitorRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/writewill" element={<WriteWill />} />
        <Route path="/modify/:id" element={<Modify />} />
        {/* Visitor Routes */}
         <Route path="/visitor/*" element={<VisitorRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;