import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YarnStashPage } from "./pages/YarnStashPage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/yarns"
          element={
            <Layout>
              <YarnStashPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
