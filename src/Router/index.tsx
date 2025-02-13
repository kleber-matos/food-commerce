import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cardapio from "../pages/Cardapio";

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
