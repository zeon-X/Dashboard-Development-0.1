import React from "react";
import OrderRow from "../../components/OrderRow";

const ShowOrders = () => {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Delivery Details</th>
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

export default ShowOrders;
