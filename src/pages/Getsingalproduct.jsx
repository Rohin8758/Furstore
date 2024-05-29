import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiGalleryLine } from "react-icons/ri";
import {
  IoCallOutline,
  IoCartOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineStar } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from "@coreui/react";
import Addtocart from "../componets/Addtocart";

const Getsingalproduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow2, setModalShow2] = useState(false);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/getsingleproduct/${id}`)
      .then(function (res) {
        // handle success
        console.log(res);
        setData(res.data.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  const addCart = (prodId) => {
    console.log(prodId);
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
    }
    if (userId) {
      axios
        .post(
          `http://localhost:5000/cart/addtocart?userId=${userId}&productId=${prodId}`
        )
        .then(function (response) {
          // handle success
          console.log(response);
          setModalShow2(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };
  return (
    <>
      {modalShow2 ? (
        <Addtocart
          show={modalShow2}
          onHide={() => setModalShow2(false)}
          productId={id}
        />
      ) : null}
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
              <a
                onClick={() => {
                  addCart(data._id);
                }}
              >
                <FaCartShopping fontSize={"15px"} className="search" />
              </a>
            </div>
          </div>
        </Container>
      </Navbar>
      {/* ================/header================= */}
      {/* ==============singal product============= */}

      <section className="content">
        <div className="product-container">
          <div className="row">
            <div className="col-xxl-3 d-flex product-margin">
              <div class="outer-image1">
                <img src={data.image ? data.image[0] : ""} alt="" />
                <div class="inner-image1">
                  <img src={data.image ? data.image[1] : ""} alt="" />
                </div>
                <div class="hovereffect-icons">
                  <div class="lower-icon">
                    <div class="mainthree-icon">
                      <IoCartOutline />
                    </div>
                    <div class="mainthree-icon">
                      <FaRegStar />
                    </div>
                    <div class="mainthree-icon">
                      <RiGalleryLine />
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-fonts1">
                <h1>{data.title}</h1>
                <div className="product-price">
                  <span className="first-span">${data.price}</span>
                  <span className="second-span">{data.discount}% OFF</span>
                </div>
                <div className="star-reting1 d-flex">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <p className="product-descri">{data.description}</p>
                <div className="addtocart">
                  <a
                    onClick={() => {
                      addCart(data._id);
                    }}
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* =================singal product============ */}
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
};

export default Getsingalproduct;
