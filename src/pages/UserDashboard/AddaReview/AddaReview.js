import React from "react";
import "./AddAReview.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";

const AddAReview = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = user?.displayName;
    fetch("https://murmuring-ridge-12828.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    
    })
    
      .then((res) => {
        res.json()
        console.log(data);
        console.log(res);
      })
      .then((result) => console.log(result));
    alert("Added Successfully");
    reset({});
  };
  return (
    <div className="my-2">
      <h2>Add Review Please</h2>
      <div className="login-box w-25 m-auto mt-4">
        <div className="event-boxd-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder={user?.displayName}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("designation")}
                placeholder="Designation"
                type="text"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("email")}
                placeholder={user?.email}
                defaultValue={user?.email}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("desc")}
                placeholder="Message"
                className="p-2 m-2 w-100"
              />
                <br />
              <input
                {...register("rating")}
                placeholder="rating(0-5)"
                className="p-2 m-2 w-100"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
