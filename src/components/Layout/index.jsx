import React, { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
      <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/debts">Debts</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </Fragment>
  )
}

export default Layout