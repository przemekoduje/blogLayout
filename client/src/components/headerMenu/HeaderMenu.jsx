import React from "react";
import { NavLink } from "react-router-dom";
import "./headerMenu.scss"

export default function HeaderMenu() {
  return (
    <div className="headerMenu">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Only Css
            </NavLink>
          </li>
          <li>
            <NavLink to="/masonry1" activeClassName="active">
              Masonry Layout
            </NavLink>
          </li>
          <li>
            <NavLink to="/masonry2" activeClassName="active">
              Blog Layout
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogDB" activeClassName="active">
              BlogDB
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeClassName="active">
              AdminPanel
            </NavLink>
          </li>
          {/* Dodaj więcej linków do innych layoutów */}
        </ul>
      </nav>
    </div>
  );
}
