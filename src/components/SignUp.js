import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import "./SignUp.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function SignUpPage(props) {
  const history = useHistory();
  const [show, setShow] = useState({ alert: false, registered: false });
  const [Msg, setMsg] = useState("");

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
          <h3>Register</h3>
        </div>
        {show.registered ? (
          <Alert
            className="Alert"
            style={{
              width: "350px",
              "margin-left": "20px",
              "margin-top": "20px",
            }}
            variant="filled"
            severity="success"
          >
            <span>Thank You For Registering</span>
          </Alert>
        ) : null}
        {show.alert ? (
          <Alert
            className="Alert"
            style={{
              width: "350px",
              "margin-left": "20px",
              "margin-top": "20px",
            }}
            variant="filled"
            severity="error"
          >
            <span>{Msg}</span>
          </Alert>
        ) : null}
        <div className="Alert"></div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .max(20, "Max 20 characters are allowed")
              .required("Enter First Name"),
            lastName: Yup.string()
              .max(20, "Max 20 characters are allowed")
              .required("Enter Last Name"),
            email: Yup.string()
              .email("Invalid Email Address")
              .required("Email Required"),
            password: Yup.string()
              .min(6, "Password must of 6 characters")
              .required("Password Required"),
          })}
          onSubmit={async (values, {resetForm}) => {
            await axios
              .post("http://localhost:5000/api/register", {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              })
              .then((response) => {
                console.log("response: ", response);
                setShow({ alert: false, registered: true });
                resetForm();
              })
              .catch((error) => {
                setMsg(error.response.data.message, "error");
                if (error.response.status >= 400) {
                  setShow({ alert: true, registered: false });
                }
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
            resetForm
          }) => {
            return (
              <>
                <form class="frm" onSubmit={handleSubmit}>
                  <input
                    type="firstName"
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter FirstName"
                    className={
                      touched.firstName && errors.firstName
                        ? "has-error"
                        : "input"
                    }
                  />
                  {errors.firstName && (
                    <p class="err_msg">{errors.firstName}</p>
                  )}
                  <input
                    type="name"
                    name="lastName"
                    value={values.lastName}
                    className={
                      touched.lastName && errors.lastName
                        ? "has-error"
                        : "input"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Last Name"
                  />
                  {errors.lastName && <p class="err_msg">{errors.lastName}</p>}
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    className={
                      touched.email && errors.email ? "has-error" : "input"
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Email"
                  />
                  {errors.email && <p class="err_msg">{errors.email}</p>}
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className={
                      touched.password && errors.password
                        ? "has-error"
                        : "input"
                    }
                  />

                  {errors.password && <p class="err_msg">{errors.password}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    class="frmbtn"
                    value="Register"
                  >
                    Register
                  </button>
                </form>
                <div style={{ "margin-top": "20px" }}>
                  Already an user?
                  <Link to="/login">
                    <span style={{ color: "blue" }}> LogIn</span>
                  </Link>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
