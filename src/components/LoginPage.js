import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import { Hidden } from "@material-ui/core";

export default function LoginPage() {
  const history = useHistory();
  const [show , setShow] = useState(false);
  const [Msg, setMsg]= useState("")

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

      <div id="navbar2">
        <ul class="ul_nav2">
          <li class="dropdown_nav2">
            Astrologers <a class="caret"></a>
            <ul class="nav2_ul nav2_ul_div" id="ul_astrologers">
              <li>Talk to Astrologers</li>
              <li>Vedic Astrology</li>
            </ul>
          </li>
          <li class="dropdown_nav2">
            Horoscopes <a class="caret"></a>
            <div class="dropdown nav2_ul_div">
              <ul>
                <span class="dropdown-content">Moon Sign Horoscopes</span>
                <li>Daily Horoscopes</li>
                <li>Weekly Horoscopes</li>
                <li>Monthly Horoscopes</li>
                <li>Yearly Horoscopes</li>
              </ul>
              <ul>
                <span>Prediction/Personalized Horoscopes</span>
                <li>Daily Predictions</li>
                <li>Weekly & Annual Predictions</li>
                <li>Life Predictions</li>
              </ul>
            </div>
          </li>
          <li>Kundlii </li>
          <li>Shodashvarga</li>
          <li class="dropdown_nav2">MatchMaking </li>
          <li class="dropdown_nav2">
            Calculators <a class="caret"></a>
            <ul class="nav2_ul nav2_ul_div">
              <li>Moon Sign Calculator</li>
              <li>Sun Sign Calculator</li>
              <li>love Compatibility Calculator</li>
            </ul>
          </li>
          <li class="dropdown_nav2">
            Learn Astrology <a class="caret"></a>
            <ul class="nav2_ul nav2_ul_div" id="learn_astrology">
              <li>Learn from Videos</li>
              <li>Learn from Books</li>
              <li>Experts</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="main">
          <h3>Login</h3>
        </div>
        {show ? (
          <Alert
            open="false"
            className="Alert"
            variant="filled"
            severity="error"
          >
            <span> {Msg}</span>
          </Alert>
        ) : null}

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid Email Address")
              .required("Email Required"),
            password: Yup.string()
              .min(6, "Password must of 6 characters")
              .required("Password Required"),
          })}
          onSubmit={async (values) => {
            console.log(values);
            await axios
              .post("http://localhost:5000/api/logIn", {
                email: values.email,
                password: values.password,
              })
              .then((response) => {
                console.log(response.data.message);
                if (response.data == "Welcome to the admin dashboard") {
                  history.push("/AdminDashboard");
                }
                if (response.data == "Welcome to the user dashboard") {
                  history.push("/UserDashboard");
                }
              })
              .catch((error) => {
                    setMsg(error.response.data.message, "error");
                    if(error.response.status >= 400){
                       setShow(true);
                    }
                    console.log(error.response.status)
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            isSubmitting,
            handleSubmit,
          }) => {
            return (
              <form class="frm" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Email"
                  onBlur={handleBlur}
                  value={values.email}
                  className={errors.email && touched.email ? "has-error" : "input"}
                />
                {errors.email && touched.email  && <div className="err_msg">{errors.email}</div>}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Password"
                  value={values.password}
                  onBlur={handleBlur}
                  className={
                    touched.password && errors.password ? "has-error" : "input"
                  }
                />
                {errors.password && (
                  <div className="err_msg">{errors.password}</div>
                )}
                <button
                  type="submit"
                  class="frmbtn"
                  disabled={isSubmitting}
                  value="Login"
                >
                  Login
                </button>
                <Link to="/forgetPswd">
                  <div class="forget_pswd">Forgot Password ?</div>
                </Link>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
