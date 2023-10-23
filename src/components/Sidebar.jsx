import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    return (
      <ul className="list-group">
        <li>
          <Link to="/admin/admin">Admin</Link>
        </li>
        <li>
          <Link to="/admin/user">User</Link>
        </li>
      </ul>
    );
  }
}
