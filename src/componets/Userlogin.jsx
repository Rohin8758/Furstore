// ==============login=============
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { IoCallOutline, IoLocationOutline, IoStar } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsFillEyeSlashFill } from "react-icons/bs";
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

function Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);


  const Login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/users/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status === 200) {
          console.log(response.data.status);
          sessionStorage.setItem("isLogged", true);
          sessionStorage.setItem("userId", response.data.data.userId);
          navigate("/");
        } else {
          sessionStorage.setItem("isLogged", false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      {/* ===================offcanvas for a search bar======================= */}
      <COffcanvas
        placement="top"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any
          React component or custom elements here.
        </COffcanvasBody>
      </COffcanvas>
      {/* ===================/offcanvas for a search bar======================= */}
      {/* ================header================= */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/home">
            <img src={require("../componets/img/Logo.webp")} />
          </Link>
          <div className="toggle">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="nav-toggle"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mynavtabs m-auto topBotomBordersOut text-center">
              <Link to="/home">Home</Link>
              <a>Collection</a>
              <Link to="/products">Products</Link>
              <a>Other Pages</a>
              <a>Blog</a>
            </div>
          </Navbar.Collapse>

          <div className="ms-auto d-flex justify-content-between nav-icon">
            <div className="all-icon-bg">
              <FaSearch
                fontSize={"15px"}
                className="search"
                onClick={() => setVisible(true)}
              />
            </div>
            <div className="all-icon-bg">
              <Link to="/login" className="fauserlogin">
                <FaUser fontSize={"15px"} className="search" />
              </Link>
            </div>
            <div className="all-icon-bg">
              <IoStar fontSize={"17px"} className="search" />
            </div>
            <div className="all-icon-bg">
              <FaCartShopping fontSize={"15px"} className="search" />
            </div>
          </div>
        </Container>
      </Navbar>
      {/* ================/header================= */}

      {/* =========================login======================= */}
      <section className="login-section">
        <div className="login-header">
          <h1>ACCOUNT</h1>
          <div className="d-flex justify-content-center align-items-center home-acc">
            <IoHomeOutline className="loginicon" />
            <h6>Home</h6>
            <GoDotFill className="loginicon" />
            <h6>Account</h6>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="sign-in-card">
              <div className="signin text-start">
                <h2>SIGN IN</h2>
                <p style={{ fontSize: "14px" }}>
                  Insert your account information:
                </p>
              </div>
              <div className="form">
                <div className="inputBox">
                  <h5>EMAIL :</h5>
                  <input
                    type="text"
                    required=""
                    className="inputs"
                    placeholder="ENTER YOUR EMAIL"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="inputBox">
                  <h5>PASWORD :</h5>
                  <input
                    type="password"
                    required=""
                    className="inputs"
                    placeholder="ENTER PASSWORD"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <BsFillEyeSlashFill className="password-eyes" />
                </div>
                <div className="forgotpass">
                  <div className="d-flex align-items-center">
                    <MdEmail style={{ margin: "10px 10px 10px 0px" }} />
                    <span style={{ fontSize: "14px" }}>
                      Forgot your <strong>Password</strong> ?
                    </span>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    If you don't have an account, please{" "}
                    <strong style={{ color: "skyblue" }}>Register Here</strong>
                  </p>
                </div>
                <div className="inputBox" style={{ marginTop: "25px" }}>
                  <button class="button-26" role="button" onClick={Login}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================login======================= */}
      {/* ========================footer===================== */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-contact col-xxl-3">
              <div className="site-logo">
                <Link to="/home">
                  <img src={require("../componets/img/Logo.webp")} />
                </Link>
                <div
                  className="footer-location footer-contact-contain d-flex"
                  style={{ marginTop: "40px" }}
                >
                  <IoLocationOutline
                    style={{ fontSize: "18px", color: "#6b7280" }}
                  />
                  <h6>2357 Gordon Street, CA</h6>
                </div>
                <div className="footer-contactnum footer-contact-contain d-flex">
                  <IoCallOutline
                    style={{ fontSize: "18px", color: "#6b7280" }}
                  />
                  <h6>0123 456 789</h6>
                </div>
                <div className="footer-email footer-contact-contain d-flex">
                  <MdOutlineEmail
                    style={{ fontSize: "18px", color: "#6b7280" }}
                  />
                  <h6>demo@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 footer-aboutus">
              <h4 style={{ fontWeight: "400" }}>About us</h4>
              <div className="footer-contain mt-5">
                <a href="#">Our story</a>
              </div>
              <div className="footer-contain">
                <a href="#">Our story</a>
              </div>
              <div className="footer-contain">
                <a href="#">Designers</a>
              </div>
            </div>
            <div className="col-xxl-2 footer-service">
              <h4 style={{ fontWeight: "400" }}>Customer service</h4>
              <div className="footer-contain mt-5">
                <a href="#">Home</a>
              </div>
              <div className="footer-contain">
                <a href="#">Product</a>
              </div>
              <div className="footer-contain">
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="col-xxl-2 footer-support">
              <h4 style={{ fontWeight: "400" }}>Support</h4>
              <div className="footer-contain mt-5">
                <a href="#">FAQ's</a>
              </div>
              <div className="footer-contain">
                <a href="#">Shipping</a>
              </div>
              <div className="footer-contain">
                <a href="#">Return</a>
              </div>
            </div>
            <div className="col-xxl-3 footer-newsletters">
              <h4 style={{ fontWeight: "400" }}>Newsletters</h4>
              <div className="input-group">
                <input
                  type="email"
                  className="input"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <input
                  className="button--submit"
                  defaultValue="Subscribe"
                  type="submit"
                />
              </div>
              <div className="social-media-icon">
                <FaFacebookF
                  style={{ fontSize: "20px", margin: "20px 20px" }}
                />
                <FaPinterestP
                  style={{ fontSize: "20px", margin: "20px 20px" }}
                />
                <FaInstagram
                  style={{ fontSize: "20px", margin: "20px 20px" }}
                />
                <FaTwitter style={{ fontSize: "20px", margin: "20px 20px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="Copyright d-flex justify-content-between mt-4 mb-2">
            <div className="Copyright-contain">
              <p style={{ color: "#6B7280" }}>
                Copyright © 2023 Vinovathemes. All Rights Reserved.
              </p>
            </div>
            <div className="all-payment-site">
              <img
                src={require("../componets/img/apple-pay-og-twitter-removebg-preview.png")}
                alt=""
              />
              <img
                src={require("../componets/img/png-transparent-discover-card-discover-financial-services-credit-card-bank-finance-credit-card-text-orange-payment-removebg-preview.png")}
                alt=""
              />
              <img
                src={require("../componets/img/images-removebg-preview.png")}
                alt=""
              />
              <img
                src={require("../componets/img/credit-card-debit-card-mastercard-logo-visa-go-vector-removebg-preview.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
      {/* ========================/footer===================== */}
    </>
  );
}

export default Userlogin;
