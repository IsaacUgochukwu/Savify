import React from 'react'
import './styles/style.css'
import './styles/bootstrap.min.css'

function Header() {
  return (
    <header id="blur">
          <span className="position-absolute h1"><a className="text-decoration-none" href="/public/index.html">Savify</a></span>
          <p className="fs-2 mx-auto text-center">A safe place to save your <span className="dark-blue fw-bold">interest.</span></p>
    </header>
  );
}

export default Header