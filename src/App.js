import "./App.css";
import NavBar from "./components/Header/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import LoginForm from "./components/Header/LoginForm";
import RegisterForm from "./components/Header/RegisterForm";
import NotFound from "./components/Header/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <main className="continer">
        <Routes>
          <Route path="/" exact element={<ProductsList />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* invalided URL */}
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
