import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/auth"
            element={user ? <Navigate to="/posts" /> : <Auth />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
