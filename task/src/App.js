import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import GetForm from "./components/getForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/showdata" element={<GetForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
