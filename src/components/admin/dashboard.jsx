import React from "react";
import Sidebar from "../Sidebar";
import {Route } from 'react-router-dom'
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Route path="/admin/admin" component={'admin'}/>
      <Route path="/admin/user" component={'user'}/>
    </div>
  );
};

export default Dashboard;
