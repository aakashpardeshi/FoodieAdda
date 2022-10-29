import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom"
import Restaurant from "./Restaurant/Restaurant";


function App() {
  return (
    <div style={{ background: "#000935" }}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
