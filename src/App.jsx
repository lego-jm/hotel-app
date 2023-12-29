import { Outlet } from "react-router-dom";
import HotelHeader from "./components/HotelHeader";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "animate.css/animate.min.css";

function App() {
  return (
    <AuthContextProvider>
      <HotelHeader />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
