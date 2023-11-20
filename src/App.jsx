import { Outlet } from "react-router-dom";
import HotelHeader from "./components/HotelHeader";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <HotelHeader />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;
