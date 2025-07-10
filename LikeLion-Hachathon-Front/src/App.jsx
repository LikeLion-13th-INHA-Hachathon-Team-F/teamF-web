import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUp from "./SignUp/SignUp";
import MainPage from "./MainPage/MainPage";
import WriteWill from "./WriteWill/WriteWill";
import Modi from "./Modi/Modi";
import VisitorRoutes from "./Visitor/VisitorRoutes";
import GoWill from "./GoWill/GoWill";
import UserMainPage from "./UserMainPage/UserMainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/usermainpage/:userpk" element={<UserMainPage />} />
        <Route path="/writewill/:userpk" element={<WriteWill />} />
        <Route path="/modi/:id" element={<Modi />} />
        {/* Visitor Routes */}
         <Route path="/visitor/*" element={<VisitorRoutes />} />
         <Route path="/gowill/:userpk" element={<GoWill />} />

      </Routes>
    </Router>
  );
}

export default App;