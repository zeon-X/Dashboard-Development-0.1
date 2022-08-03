import React from "react";
import OrderRow from "../../components/OrderRow";

const PendingOrders = () => {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Details</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* TABLE ROW  */}
            <OrderRow></OrderRow>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingOrders;
