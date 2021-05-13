import React, { useState } from "react";
import AdminPanel from "./AdminDashboard/AdminPanel";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router";
import SignUpPage from "./components/SignUp";
import UserPanel from "./UserDashboard/UserPanel";
import ErrorPage from "./components/ErrorPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPasswordPage1";
import ResetPassword from "./components/ResetPassword";
export default function App() {
   const [errorMsg, seterrMsg]= useState();
  return (
    <>
        <Switch>
          <Route exact path="/" component={()=>{return <HomePage/>}} />
          <Route exact path ="/login" component={()=>{return( <LoginPage/>)}}/>
          <Route exact path ="/AdminDashboard" component={()=>{return <AdminPanel/>}}/>
          <Route exact path ="/signup" component={()=>{return (<SignUpPage/>)}}/>
          <Route exact path ="/UserDashboard" component={()=>{return <UserPanel/>}}/>
          <Route exact path ="/ErrorPage" component={()=>{return <ErrorPage/>}}/>
          <Route exact path ="/forgetPswd" component={()=>{return <ForgetPassword/>}}/>
          <Route exact path ="/resetpassword/:id" component={({match})=>{return <ResetPassword match={match}/>}}/>
        </Switch>
    </>
  );
}
