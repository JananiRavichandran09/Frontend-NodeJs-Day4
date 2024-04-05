import React, { useEffect } from 'react';
import Content from './Content';
import { Link } from 'react-router-dom';
import axios from "axios";
const Dashboard = () => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8080/dashboard')
      .then(result => {
        console.log(result)
        if (result.data !== "Success") {
          // navigate('/')
        }
      })
      .catch(err=>console.log(err))
      
  },[])
  return (
    <div>
      <div className="container-fluid">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h3>
                Dashboard <i class="fa-solid fa-house-user"></i>
              </h3>
            </a>
            <div>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <h5 >
                  Logout <i class="fa-solid fa-right-from-bracket"></i>
                </h5>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Content />
    </div>
  );
};

export default Dashboard;