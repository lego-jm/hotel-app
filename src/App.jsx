import { Outlet } from "react-router-dom";
import HotelHeader from "./components/HotelHeader";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AuthContextProvider>
        <HotelHeader />
        <ScrollToTop>
          <Outlet />
          <Footer />
        </ScrollToTop>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
