import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import {fa-business-time} from "@fortawesome/free-solid-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ISMT Lab</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          {this.state.clicked ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.titile}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
