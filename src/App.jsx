import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { YarnStashPage } from "./pages/YarnStashPage";
import { HomePage } from "./pages/HomePage";
import { YarnDetailsPage } from "./pages/YarnDetailsPage";
import { Layout } from "./components/Layout/Layout";

// REVIEW: The <Layout> wrapper is repeated for every route. Consider using a
// layout route (React Router's <Route element={<Layout />}>) with an <Outlet />
// inside Layout to avoid the repetition and keep routes cleaner.
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
        <Route
          path="/yarns/:id"
          element={
            <Layout>
              <YarnDetailsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
