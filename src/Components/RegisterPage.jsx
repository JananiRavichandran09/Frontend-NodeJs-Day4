import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault()
    
    console.log("register API payloads", username, email, password);
   
    const payloads = { username, email, password };
    await axios
      .post("https://backend-nodejs-day4.onrender.com/api/user/register", payloads)
      .then((res) => setResponseMsg(res.data.message));
         toast.success("Registered Successfully")
    navigate('/')
      .catch((err) => {
      console.log(err);
      toast.error(responseMsg);
    });
  };

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
                <label for="inputuserName" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="inputuserName"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  style={{ width: "300px" }}
                />

                <label for="exampleFormControlInput1" class="col-form-label">
                  Email address
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
                    Register
                  </button>

                  <br />
                  <p>
                    Already have an account? <Link to="/">Login</Link>
                  </p>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
