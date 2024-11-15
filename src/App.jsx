import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import CarDetails from "./pages/CarDetails";
import Payment from "./pages/Payment";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details/:id" element={<CarDetails />} />
      <Route path="/payment/:id" element={<Payment />} />
    </Routes>
  </Router>
);

export default App;
