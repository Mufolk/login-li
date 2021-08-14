import React, { useContext, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu secondary stackable size="massive" color="teal">
      <Menu.Item
        className="menu-alignment"
        name={user.username}
        active
        as={Link}
        to="/"
      />
      <Menu.Item
        name="page1"
        active={activeItem === "page1"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} as={Link} to="/login">
          Logout
          <Icon name="sign-out" style={{ marginLeft: 5 }} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu secondary stackable size="massive" color="teal">
      <Menu.Item
        className="menu-alignment"
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="page1"
        active={activeItem === "page1"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        >
          Login
          <Icon name="sign-in" style={{ marginLeft: 5 }} />
        </Menu.Item>
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        >
          Register
          <Icon name="signup" style={{ marginLeft: 5 }} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
