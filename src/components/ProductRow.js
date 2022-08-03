import React from "react";

const ProductRow = ({ x, handleDeleteProduct }) => {
  // console.log(handleDeleteProduct);
  const { title, img, price, quantity, decs, updatedAt, _id } = x;
  return (
    <tr>
      <th>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
      </th>
      {/* IMAGE NAME DATE  */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold uppercase">{title}</div>
            <div className="text-sm opacity-50">Price: BDT {price}</div>
          </div>
        </div>
      </td>
      {/* SHOET DETAILS  */}
      <td>
        {decs.slice(0, 30)}..
        <br />
        <span className="badge badge-ghost badge-sm">Updated: {updatedAt}</span>
      </td>
      {/* ACTION  */}
      <td>
        {/* DELETE BTN  */}
        <button
          class="btn btn-circle btn-outline mr-1"
          onClick={() => handleDeleteProduct(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        {/* EDIT BTN  */}
        <button class="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="yellow"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
      </td>

      {/* DETAILS BTN */}
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ProductRow;
