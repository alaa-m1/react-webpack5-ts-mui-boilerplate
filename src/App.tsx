import React from "react";
import "./App.scss";
import { AppLayout } from "./pages/AppLayout";
import Auth from "./pages/Auth";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Home />} />
        <Route
          path="collection"
          element={<Collection />}
        />
        <Route
          path="auth"
          element={
              <Auth />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;