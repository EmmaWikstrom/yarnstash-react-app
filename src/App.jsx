import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YarnStashPage } from "./pages/YarnStashPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yarns" element={<YarnStashPage />} />
      </Routes>
    </BrowserRouter>
  );
}
