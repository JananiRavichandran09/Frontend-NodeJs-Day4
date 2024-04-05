import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import ForgotPasswor from './Components/ForgotPasswor';
import ResetPassword from './Components/ResetPassword';


const App = () => {
  const [token,setToken] = useState('')
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setToken={setToken} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPasswor />} />
          <Route path="/resetpassword/:token" element={<ResetPassword  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;