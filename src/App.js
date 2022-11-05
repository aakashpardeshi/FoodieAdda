import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom"
import Restaurant from "./Restaurant/Restaurant";
import CartContainer from "./Cart/CartContainer";
import { useEffect } from "react";

function App() {


  useEffect(() => {
  }, []);
  return (
    <div style={{ background: "#000935" }}>
      <Header />
      <CartContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
