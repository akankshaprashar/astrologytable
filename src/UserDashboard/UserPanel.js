import React from "react";
import "./UserPanel.css";

export default function UserPanel(props) {
  return (
    <>
      <div id="navbar">
        <h1
          id="logo"
          onClick={() => {
            props.setShow(0);
          }}
        >
          Astrology
        </h1>
        <select>
          <option selected>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>

        <div class="dropdown nav1_userrole">
          <a class="dropdown-toggle" type="button" data-toggle="dropdown">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
              style={{ "border-radius": "50%" }}
              height="35"
              alt=""
              loading="lazy"
            />
            <span >User</span>
            <a class="caret"></a>
          </a>
          <ul class="dropdown-menu ul_nav1">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">SignOut</a>
            </li>
          </ul>
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
    </>
  );
}
