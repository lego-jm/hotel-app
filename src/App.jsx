import { Outlet } from "react-router-dom";
import HotelHeader from "./components/HotelHeader";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ReactQueryDevtools } from "react-query/devtools";
import "animate.css/animate.min.css";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthContextProvider>
        <HotelHeader />
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
