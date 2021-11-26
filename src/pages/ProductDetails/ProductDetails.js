import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import Header from "../Shared/Header/Header";
import "./ProductDetails.css";
const ProductDetails = (props) => {
  let typeStyle = {
    zIndex: "1000",
    position: "absolute",
    top: "20px",
    right: "40px",
    bottom: "0",
    backgroundColor: "#ff7f47",
    height: "40px",
    width: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: "5px",
  };
  const { user } = useFirebase();
  const { productId } = useParams();
  const [productdetails, setproductdetails] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    fetch(`https://murmuring-ridge-12828.herokuapp.com/productDetails/${productId}`)
      .then((res) => res.json())
      .then((data) => setproductdetails(data));
  }, [productdetails]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    data.status = "Pending";
    fetch("https://murmuring-ridge-12828.herokuapp.com/purchaseInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Buying Successfully");
    reset({});
  };

  return (
    <div>
      <Header></Header>
      <div className="details-banner">
        <div className="row container my-5">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="breadcrumb-wrap">
              <h2 className="my-5">Drone Information Details</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-7">
            <div className="details-info">
              <img src={productdetails?.img} alt="details-img" />
              <h2 className="mt-5">{productdetails?.name}</h2>
              <div className=" details mt-2 d-flex align-items-center justify-content-between">
                <h5>{productdetails?.price}</h5>
                {productdetails?.type ? <p style={typeStyle}>{productdetails?.type} !</p> : ""}
              </div>
              <div className="overview">
                <h5>Overview</h5>
                <p>{productdetails?.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="login-box  m-auto mt-2">
              <div className="event-box d-flex justify-content-center align-items-center">
                <div className="login-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name")}
                      placeholder={user?.displayName}
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("email")}
                      placeholder={user?.email}
                      defaultValue={user?.email}
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("phone")}
                      placeholder="Phone"
                      className="p-2 m-2 w-100"
                      type="text"
                    />
                    <input
                      {...register("details")}
                      placeholder={productdetails?.name}
                      className="p-2 m-2 w-100"
                      type="text"
                      defaultValue={productdetails?.name}
                    />

                    <textarea
                      {...register("message")}
                      placeholder="Message"
                      className="p-2 m-2 w-100"
                    />

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input
                      type="submit"
                      value="Purchase Now"
                      className="booknow"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
