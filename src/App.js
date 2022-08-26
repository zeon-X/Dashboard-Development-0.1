import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/Product/AddProduct";
import ShowProduct from "./pages/Product/ShowProducts";
import { Routes, Route } from "react-router-dom";
import ShowOrders from "./pages/Order/ShowOrders";
import PendingOrders from "./pages/Order/PendingOrders";
import Login from "./pages/Login/Login";
import RequireAuth from "./Utilities/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Dashboard>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/product-add"
            element={
              <RequireAuth>
                <AddProduct></AddProduct>
              </RequireAuth>
            }
          />
          <Route
            path="/product-show"
            element={
              <RequireAuth>
                <ShowProduct></ShowProduct>
              </RequireAuth>
            }
          />

          <Route
            path="/orders-show"
            element={
              <RequireAuth>
                <ShowOrders></ShowOrders>
              </RequireAuth>
            }
          />
          <Route
            path="/orders-pending"
            element={
              <RequireAuth>
                <PendingOrders></PendingOrders>
              </RequireAuth>
            }
          />
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;
