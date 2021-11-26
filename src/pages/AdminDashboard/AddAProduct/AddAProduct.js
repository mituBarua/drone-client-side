import React from "react";
import "./AddAProduct.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";

const AddAProduct = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://murmuring-ridge-12828.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      alert('Added Successfully');
      reset({});
   
  };
  return (
    <div className="my-5">
      <h2>Add Product Please</h2>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box   d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="product name"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price")}
                placeholder="price"
                type="text"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("type")}
                placeholder="type"
               
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50 my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;