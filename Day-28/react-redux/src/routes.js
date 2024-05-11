// Dependencies
import { Route, Routes } from "react-router-dom";

//Components
import App from "./App";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Error404 from "./components/Error404";

const AppRoutes = () => (
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </App>
);

export default AppRoutes;
