import './App.scss';
import { Routes, Route } from 'react-router';
import Login from 'pages/login';
import Register from 'pages/register';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/Layouts/AppLayout';
import {Profile} from "./pages/profile";
import {Configurator} from "./pages/configurator";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='antialiasing'>
      <Routes>
        <Route exact path="/" element={<AppLayout />} >
          <Route index element={<Home/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/configurator" element={<Configurator />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={7000}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable
          theme="colored"
      />
    </div>
  );
}

export default App;
