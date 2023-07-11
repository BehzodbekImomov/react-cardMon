import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

import "./Layout.scss"

const Layout = () => {
  return (
    <Fragment>
      <header>
        <Container className="header">
          <NavLink className="expen" to="/debts">Expenses</NavLink>
          <NavLink className="earn" to="/transactions">Earnings</NavLink>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
