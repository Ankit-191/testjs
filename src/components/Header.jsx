import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav_bar">
        <li>
          <Link to="/">Question 1</Link>
        </li>
        <li>
          <Link to="/two">Question 2</Link>
        </li>
        <li>
          <Link to="/three">Question 3</Link>
        </li>
        <li>
          <Link to="/four">Question 4</Link>
        </li>
        <li>
          <Link to="/five">Question 5</Link>
        </li>
        <li>
          <Link to="/six">Question 6</Link>
        </li>
        <li>
          <Link to="/seven">Question 7</Link>
        </li>
        <li>
          <Link to="/eight">Question 8</Link>
        </li>
        <li>
          <Link to="/nine">Question 9</Link>
        </li>
        <li>
          <Link to="/ten">Question 10</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
