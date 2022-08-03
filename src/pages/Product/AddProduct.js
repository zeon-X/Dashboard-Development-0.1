import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_KEY } from "../../Utilities/env";
import Swal from "sweetalert2";
import { config_access_token } from "../../Utilities/access_token";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [des, setDes] = useState("");
  const [cat, setCat] = useState([]);
  const [q, setQ] = useState(0);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [dp, setDp] = useState("");
  const [ddp, setDdp] = useState([]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    // console.log(API_KEY);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeDes = (event) => {
    setDes(event.target.value);
  };
  const handleChangeCat = (event) => {
    let array = event.target.value.split(/[ ,]+/);
    setCat(array);
  };
  const handleChangeSize = (event) => {
    let array = event.target.value.split(/[ ,]+/);
    setSize(array);
  };
  const handleChangeQuantity = (event) => {
    setQ(event.target.value);
  };
  const handleChangeColor = (event) => {
    let array = event.target.value.split(/[ ,]+/);
    setColor(array);
  };
  const handleChangeDP = (event) => {
    let formData = new FormData();
    formData.append("image", event.target.files[0]);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=38c6cb7b6d6c1bbe615954c73f06a9af`,
        formData
      )
      .then((res) => {
        let img = res.data.data.display_url;
        setDp(img);
      })
      .catch((error) => {
        console.log("error occured\n");
        console.log(error);
      });

    // console.log(event.target.files[0]);
  };

  //!aaaaaaaa
  //aaaaaaaaa

  const handleChangeDdp = async (event) => {
    let ans = [];
    let array = event.target.files;

    for (let i = 0; i < array.length; ++i) {
      let formData = new FormData();
      formData.append("image", event.target.files[i]);

      await axios
        .post(
          `https://api.imgbb.com/1/upload?key=38c6cb7b6d6c1bbe615954c73f06a9af`,
          formData
        )
        .then((res) => {
          let img = res.data.data.display_url;
          let dlt = res.data.data.delete_url;
          ans.push({ img, dlt });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setDdp([...ddp, ...ans]);
    // console.log(ddp);
  };

  const handleRemoveAllSelection = () => {
    setDdp([]);
  };

  const removeAll = () => {
    setTitle("");
    setPrice(0);
    setCat([]);
    setColor([]);
    setDdp([]);
    setDes("");
    setDp("");
    setSize([]);
    setQ(0);
  };

  const handleUploadProductBtn = () => {
    let newProduct = {
      title: title,
      decs: des,
      img: dp,
      imgArray: ddp,
      categories: cat,
      size: size,
      color: color,
      price: price,
      quantity: q,
    };

    // console.log(newProduct);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Upload it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            "http://localhost:5000/api/product/create",
            newProduct,
            config_access_token
          )
          .then((res) => {
            // console.log(res.data);
            if (res.status == 201) {
              Swal.fire({
                icon: "success",
                title: "Uploaded",
                text: "Product Successfully Uploaded!",
              }).then(() => {
                removeAll();
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Eror",
                text: "Something went wrong!",
              });
            }
          })
          .catch((error) => {
            console.log("error at create product");
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.response.data.message,
            });
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="lg:p-10 bg-gray-800 rounded-lg p-5">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Title</span>
          </label>
          <input
            type="text"
            placeholder=""
            class="input input-bordered w-full "
            onChange={handleChangeTitle}
            value={title}
          />
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Price (BDT)</span>
          </label>
          <input
            type="number"
            placeholder=""
            class="input input-bordered w-full "
            onChange={handleChangePrice}
            value={price}
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Product Discription</span>
          </label>
          <textarea
            class="textarea textarea-bordered h-24"
            placeholder=""
            onChange={handleChangeDes}
            value={des}
          ></textarea>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">
              Product Categories (Input Category Strings)
            </span>
          </label>
          <textarea
            class="textarea textarea-bordered h-24"
            placeholder=""
            onChange={handleChangeCat}
            value={cat}
          ></textarea>
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Quantity</span>
          </label>
          <input
            type="number"
            placeholder=""
            class="input input-bordered w-full "
            onChange={handleChangeQuantity}
            value={q}
          />
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">
              Available Sizes (Input strings with space)
            </span>
          </label>
          <input
            type="text"
            placeholder=""
            class="input input-bordered w-full "
            onChange={handleChangeSize}
            value={size}
          />
        </div>
      </div>

      <div class="form-control w-full ">
        <label class="label">
          <span class="label-text">
            Available Colors (Input strings with space)
          </span>
        </label>
        <input
          type="text"
          placeholder=""
          class="input input-bordered w-full "
          onChange={handleChangeColor}
          value={color}
        />
      </div>

      {/* IMAGES  */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="form-control my-5">
          <label for="myfile">Select a product picture:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={handleChangeDP}
            accept="image/*"
          />
          <br />
          <div className="flex justify-center">
            <img
              src={dp}
              alt=""
              style={{ width: "250px" }}
              className="rounded my-3"
            ></img>
          </div>
        </div>

        <div className="form-control my-5">
          <label for="myfile">Select detail product picture:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            multiple
            onChange={handleChangeDdp}
            accept="image/*"
          />
          <br />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 my-3">
            {ddp.map((x) => {
              return (
                <div key={x.img} className="" style={{ height: "90px" }}>
                  <img
                    src={x.img}
                    alt=""
                    className="rounded"
                    style={{ height: "90px" }}
                  ></img>
                </div>
              );
            })}
          </div>
          {ddp.length > 0 && (
            <button onClick={handleRemoveAllSelection} class="btn btn-error">
              Remove all selection
            </button>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center mb-8 mt-3">
        <button onClick={handleUploadProductBtn} class="btn btn-wide">
          Upload Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
