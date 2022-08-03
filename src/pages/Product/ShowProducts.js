import React, { useEffect, useState } from "react";
import ProductRow from "../../components/ProductRow";
import axios from "axios";
import Swal from "sweetalert2";
import { config_access_token } from "../../Utilities/access_token";

const ShowProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/product/allProducts?new=true")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(
            `http://localhost:5000/api/product/delete?id=${_id}`,
            config_access_token
          )
          .then((res) => {
            if (res.status == 200) {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                let temp = product.filter((x) => x._id !== _id);
                setProduct(temp);
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: res.response.data.message || res.response.data,
              });
            }
          });
      }
    });
  };

  // console.log(product);

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
            {product.map((x) => {
              return (
                <ProductRow
                  key={x._id}
                  x={x}
                  handleDeleteProduct={handleDeleteProduct}
                ></ProductRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProducts;
