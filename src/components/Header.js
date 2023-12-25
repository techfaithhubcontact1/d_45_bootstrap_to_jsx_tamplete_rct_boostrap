import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* Navbar start */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <Link to="/" className="text-white">
                  123 Street, New York
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <Link to="/" className="text-white">
                  Email@Example.com
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <Link to="/" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </Link>
              <Link to="/" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </Link>
              <Link to="/" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/Shop" className="nav-item nav-link">
                  Shop
                </Link>
                <Link to="ShopDetail" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/Cart" className="dropdown-item">
                      Cart
                    </Link>
                    <Link to="/Checkout" className="dropdown-item">
                      Chackout
                    </Link>
                    <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/NotFound" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary" />
                </button>
                <Link to="/" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                  >
                    3
                  </span>
                </Link>
                <Link to="/Login" className="my-auto">
                  <i className="fas fa-user fa-2x" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
    </header>
  );
}
