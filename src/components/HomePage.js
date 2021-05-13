import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import "./HomePage.css";
import { Link, Switch,Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./LoginPage";

export default function HomePage(props) {
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
            <button>SignUp</button>
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
      <div class="HomeContainer"></div>
    
     
    </>
  );
}
