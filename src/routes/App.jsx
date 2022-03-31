import React from "react";

import { Routes, Route } from "react-router-dom";
import {
  Checkout,
  Home,
  Information,
  Payment,
  Success,
  NotFound,
} from "../container";
import Layout from "../components/Layout/Layout";
import Appcontext from "../context/Appcontext";
import useInitialSate from "../hooks/useInitialState";
import "./App.css";

function App() {
  const initialSate = useInitialSate();
  return (
    <Appcontext.Provider value={initialSate}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Appcontext.Provider>
  );
}

export default App;
