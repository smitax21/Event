import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (e) => {
    e.defaultValue();
    const userData = JSON.parse(localStorage.getItem(data.userName));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Username or Password is not matching with our record");
      }
    } else {
      console.log("No username matching with our record");
    }
  };

  return (
    <>
      <h3>Login Page</h3>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Username"
        />
        {errors.userName && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <input type={"submit"} />
      </form>
    </>
  );
};

export default Login;
