import React, { useContext } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);

  const menuBar = user ? (
    <Menu secondary stackable size="massive" inverted>
      <Menu.Item
        className="menu-alignment"
        name={user.username}
        active
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} as={Link} to="/">
          Logout
          <Icon name="sign-out" style={{ marginLeft: 5 }} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  ) : (
    <div></div>
  );

  return menuBar;
}

export default MenuBar;
