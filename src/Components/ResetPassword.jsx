import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
    const [password, setPassword] = useState()
  const navigate = useNavigate();
   axios.defaults.withCredentials = true;
    const {id,  token } = useParams()
   
  const handleSubmit = (e) => {
     navigate("/");
    e.preventDefault()
   
    axios
      .post(
        `https://backend-nodejs-day4.onrender.com/api/user/resetpassword/${id}/${token}`,
        {
          password,
        }
      )
      .then((res) => {
        if (res.data.Success === "Success") {
          
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
          
  };

  return (
    <div>
      <div className="card">
        <div
          className="container-fluid "
          style={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col d-flex justify-content-center ">
                <form onSubmit={handleSubmit}>
                  <div
                    className="mb-3 card-body p-5"
                    style={{ boxShadow: "5px 10px 8px 10px #888888" }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                        fontFamily: "cursive",
                        fontWeight: "bold",
                      }}
                    >
                      Reset Password{" "}
                    </h3>
                    <label
                      for="exampleFormControlInput1"
                      class="col-form-label"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=" Password"
                      autoComplete="off"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
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
                        Send
                      </button>
                      <ToastContainer />
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
