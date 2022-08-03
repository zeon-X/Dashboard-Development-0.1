import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/Product/AddProduct";
import ShowProduct from "./pages/Product/ShowProducts";
import { Routes, Route } from "react-router-dom";
import ShowOrders from "./pages/Order/ShowOrders";
import PendingOrders from "./pages/Order/PendingOrders";

function App() {
  return (
    <div>
      <Dashboard>
        <Routes>
          <Route path="/product-add" element={<AddProduct></AddProduct>} />
          <Route path="/product-show" element={<ShowProduct></ShowProduct>} />

          <Route path="/orders-show" element={<ShowOrders></ShowOrders>} />
          <Route
            path="/orders-pending"
            element={<PendingOrders></PendingOrders>}
          />
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;
