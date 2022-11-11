import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login(props) {
  const [disabled, changeDisabled] = useState(false);
  console.log(props);

  const submitHandler = async (e) => {
    e.preventDefault();
    changeDisabled(true);
    try {
      const res = await props.client.login(
        e.target.username.value,
        e.target.password.value
      );
      // take the response token in the child component
      // hoist up to the parent component
      // stores the auth token in App.js state
      props.loggedIn(res.data.token);
    } catch (error) {
      alert("an error occurred, please try again");
    }
    changeDisabled(false);
  };

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => submitHandler(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;

// const Login = (props) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [data, setData] = useState("");

//   const onSubmit = (e) => {
//     // e.defaultValue();
//     const userData = JSON.parse(localStorage.getItem(props.userName));
//     console.log(props);

//     if (userData) {
//       // getItem can return actual value or null
//       if (userData.password === props.password) {
//         alert(userData.name + " You Are Successfully Logged In");
//         console.log(userData.name + " You Are Successfully Logged In");
//       } else {
//         alert("Username or Password is not matching with our record");
//         console.log("Username or Password is not matching with our record");
//       }
//     } else {
//       alert("No username matching with our record");
//       console.log("No username matching with our record");
//     }
//   };

//   return (
//     <>
//       <h3>Login Page</h3>
//       <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           {...register("userName", { required: true })}
//           placeholder="Username"
//         />
//         {errors.userName && (
//           <span style={{ color: "red" }}>*Email* is mandatory </span>
//         )}
//         <input
//           type="password"
//           {...register("password")}
//           placeholder="Password"
//         />
//         <input type={"submit"} />
//       </form>
//     </>
//   );
// };

// export default Login;
