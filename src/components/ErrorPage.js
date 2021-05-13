import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import axios from "axios";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router";
import {Link } from "react-router-dom";

export default function ErrorPage(props) {
  const [data, setData] = useState({});
  const [Res, setRes] = useState("");
  const history = useHistory();


  return (
    <>
      <div id="navbar">
        <h1 id="logo">Astrology</h1>
        <div class="navbar_log">
          <a href="#">
            <Link to="/login">
              <span class="navbar_login">Login</span>
            </Link>
          </a>
          <Link to="/signup">
            <button>Register</button>
          </Link>
          <select>
            <option selected>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
      <div>
          <h1>Error Page</h1>
      </div>
    </>
  );
}
