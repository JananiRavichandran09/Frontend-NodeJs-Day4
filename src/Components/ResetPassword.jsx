import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
    const [password, setPassword] = useState('')
  
    const navigate = useNavigate();
    const {  token } = useParams()
    axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await axios
        .post(`http://localhost:8080/api/user/resetpassword${token}`, password )
        .then(res => {
            if (res.data.status) {
                 navigate('/')
            } 
            console.log(response.data)
        })
      .catch(err => console.log(err))
      
          
  };

  return (
    <div>
      <div>
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
                  <div className="mb-3 ">
                    <h3>Reset Password</h3>
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
                      value={email}
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
                        Update
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

export default ResetPassword;
