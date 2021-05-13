import "../../AdminDashboard/AdminPanel";
import "../LoginPage.css";
import "../SignUp.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function ForgetPassword(props) {
  const [data, setData] = useState({});
  const [Res, setRes] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [Error, setError] = useState({});

  const Click1 = async () => {
    error();
  };

  function error() {
    let error = {};
    if (!data.email) {
      error.msg = "Email Address Required";
    }
    return error, setError(error);
  }

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
    error();
  };

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
          <h3>Forget Password</h3>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Enter valid Email Address")
              .required("Email Required"),
          })}
          onSubmit={async (values) => {
            await axios
              .put("http://localhost:5000/api/forgotPassword", {
                email: data.email,
              })
              .then((response) => {
                console.log("response: ", response);
                if (data.email) {
                  setShow(true);
                }
              });
          }}
        >
          {({values,
            errors,
            touched,
            handleBlur,
            handleChange,
            isSubmitting,
            handleSubmit,}) => {
            return (
              <>
                <form class="frm" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Email"
                    class={touched.email && errors.email ? "has-error" : "input"}
                  />
                  {errors.email && <p class="err_msg">{errors.email}</p>}
                  <button
                    type="submit"
                    class="frmbtn"
                    value="Login"
                  >
                    Send Mail
                  </button>
                </form>
                {show ? (
                  <Alert
                    className="Alert"
                    style={{ width: "350px", "margin-top": "20px" }}
                    variant="filled"
                    severity="success"
                  >
                    <span>
                      Password reset link has been sent to {values.email}
                    </span>
                  </Alert>
                ) : null}
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
