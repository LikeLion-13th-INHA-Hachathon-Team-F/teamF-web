import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUp from "./SignUp/SignUp";
import MainPage from "./MainPage/MainPage";
import WriteWill from "./WriteWill/WriteWill";
import Modi from "./Modi/Modi";
import VisitorRoutes from "./Visitor/VisitorRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/writewill" element={<WriteWill />} />
        <Route path="/modi/:id" element={<Modi />} />
        {/* Visitor Routes */}
         <Route path="/visitor/*" element={<VisitorRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;