import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import Details from "./pages/Details";
import SingUp from "./pages/SingUp";
import Categories from "./pages/Categories";
import { moviesContext } from "../src/context/MoviesContext";

function App() {
  const { popular, unpopular, recent } = useContext(moviesContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/recent" element={<Categories movies={recent} />} />
          <Route path="/popular" element={<Categories movies={popular} />} />
          <Route
            path="/unpopular"
            element={<Categories movies={unpopular} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
