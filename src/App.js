import './App.scss';
import {Routes, Route} from 'react-router';
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
import {ConfigSuccess} from "./pages/config-success";
import {ConfigFail} from "./pages/config-fail";
import {AuthProtection} from "./components/AuthProtection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ConfiguratorSelect} from "./pages/configurator-select";
import {AutoConfigurator} from "./pages/auto-configurator";
import {VerifiedEmail} from "./pages/verified-email";
import {SaveConfig} from "./pages/save-config";
import {SavedConfigs} from "./pages/saved-configs";
import {Tutorials} from "./pages/tutorials";

function App() {
    return (
        <div className='antialiasing'>
            <Routes>
                <Route exact path="/" element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/profile" element={<AuthProtection ><Profile/></AuthProtection>}/>
                    <Route path="/config-selector" element={<ConfiguratorSelect/>}/>
                    <Route path="/email-verified" element={<VerifiedEmail/>}/>
                    <Route path="/tutorials" element={<Tutorials/>}/>
                    <Route path="/save-config" element={<AuthProtection ><SaveConfig/></AuthProtection>}/>
                    <Route path="/configs" element={<AuthProtection ><SavedConfigs/></AuthProtection>}/>
                    <Route path="/configurator" element={<Configurator/>}/>
                    <Route path="/auto-configurator" element={<AutoConfigurator/>}/>
                    <Route path="/config-success" element={<ConfigSuccess />} />
                    <Route path="/config-fail" element={<ConfigFail />} />
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/password-reset/:token" element={<PasswordReset/>}/>
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
