import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgotPasswor = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("login api payloads", email);
      const payloads = {  email };
      await axios
        .post(
          "https://backend-nodejs-day4.onrender.com/forgotpassword",
          payloads
        )
        .then((res) => {
          if (res.data.Status === "Success") {
            alert("Check your Email for reset passwod link");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
                      className="mb-2 card-body p-5"
                      style={{  boxShadow :"5px 10px 8px 10px #888888"}}
                    >
                      <h3 style={{textAlign:"center", fontFamily:"cursive",fontWeight:"bold"}}>Forgot Password</h3>
                      <label
                        for="exampleFormControlInput1"
                        class="col-form-label"
                      >
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
                        <br />
                      </div>
                    </div>
                  </form>

                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgotPasswor;

