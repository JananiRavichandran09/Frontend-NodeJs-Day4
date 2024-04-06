import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login api payloads", email, password);
    const payloads = { password, email };
    await axios
      .post("https://backend-nodejs-day4.onrender.com/api/user/login", payloads)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          toast.success("Login Successfully");
          navigate("/dashboard");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      className="container-fluid "
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom right, #ccff99, #99ffcc)",
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col d-flex justify-content-center ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label for="exampleFormControlInput1" class="col-form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "300px" }}
                />
                <label for="inputPassword5" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: "300px" }}
                />
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    style={{
                      width: "300px",
                      border: "none",
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    Login
                  </button>
                  <ToastContainer />
                  <p>
                    You don't have an account?
                    <Link to="/register">Register</Link>
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <Link to="/forgotpassword" style={{ color: "red" }}>
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
