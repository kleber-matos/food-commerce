import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cardapio from "../pages/Cardapio";
import Home from "../pages/Home";

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
