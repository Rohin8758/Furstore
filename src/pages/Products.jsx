import { Link, useNavigate, useParams } from "react-router-dom";
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
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiGalleryLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from "@coreui/react";
import Addtocart from "../componets/Addtocart";

const Products = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalShow2, setModalShow2] = useState(false);
  const [visible, setVisible] = useState(false);


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

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getallproduct")
      .then(function (response) {
        // handle success
        console.log(response.data.productData);
        setData(response.data.productData.reverse());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      {modalShow2 ? (
        <Addtocart
          show={modalShow2}
          onHide={() => setModalShow2(false)}
          productId={id}
        />
      ) : null}
       {/* ===================offcanvas for a search bar======================= */}
       {/* ===================offcanvas for a search bar======================= */}

      <COffcanvas
        placement="top"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>
          <div className="container">
            <form action="#" className="search">
              <button className="search__button">
                <div className="search__icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                  >
                    <title>magnifying-glass</title>
                    <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z" />
                  </svg>
                </div>
              </button>
              <input
                type="text"
                className="search__input"
                placeholder="Search..."
              />
              <button className="mic__button">
                <div className="mic__icon">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 83.44 122.88"
                    style={{ enableBackground: "new 0 0 83.44 122.88" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M45.04,95.45v24.11c0,1.83-1.49,3.32-3.32,3.32c-1.83,0-3.32-1.49-3.32-3.32V95.45c-10.16-0.81-19.32-5.3-26.14-12.12 C4.69,75.77,0,65.34,0,53.87c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,9.64,3.95,18.41,10.31,24.77 c6.36,6.36,15.13,10.31,24.77,10.31h0c9.64,0,18.41-3.95,24.77-10.31c6.36-6.36,10.31-15.13,10.31-24.77 c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,11.48-4.69,21.91-12.25,29.47C64.36,90.16,55.2,94.64,45.04,95.45L45.04,95.45z M41.94,0c6.38,0,12.18,2.61,16.38,6.81c4.2,4.2,6.81,10,6.81,16.38v30c0,6.38-2.61,12.18-6.81,16.38c-4.2,4.2-10,6.81-16.38,6.81 s-12.18-2.61-16.38-6.81c-4.2-4.2-6.81-10-6.81-16.38v-30c0-6.38,2.61-12.18,6.81-16.38C29.76,2.61,35.56,0,41.94,0L41.94,0z M53.62,11.51c-3-3-7.14-4.86-11.68-4.86c-4.55,0-8.68,1.86-11.68,4.86c-3,3-4.86,7.14-4.86,11.68v30c0,4.55,1.86,8.68,4.86,11.68 c3,3,7.14,4.86,11.68,4.86c4.55,0,8.68-1.86,11.68-4.86c3-3,4.86-7.14,4.86-11.68v-30C58.49,18.64,56.62,14.51,53.62,11.51 L53.62,11.51z" />
                    </g>
                  </svg>
                </div>
              </button>
              <button className="picture__button">
                <div className="picture__icon">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.88 101.28"
                    style={{ enableBackground: "new 0 0 122.88 101.28" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M28.94,12.53V4.77c0-1.31,0.54-2.51,1.4-3.37C31.2,0.54,32.39,0,33.7,0h55.47c1.31,0,2.51,0.54,3.37,1.4 c0.86,0.86,1.4,2.06,1.4,3.37v7.77h25.23c1.02,0,1.95,0.42,2.62,1.09c0.67,0.67,1.09,1.6,1.09,2.62v15.73v50.94v14.67 c0,1.02-0.42,1.95-1.09,2.62c-0.67,0.67-1.6,1.09-2.62,1.09H3.7c-1.02,0-1.95-0.42-2.62-1.09C0.42,99.52,0,98.6,0,97.58V82.91 V31.97V16.24c0-1.02,0.42-1.95,1.09-2.62c0.67-0.67,1.6-1.09,2.62-1.09H28.94L28.94,12.53z M61.9,32.86 c12.98,0,23.5,10.52,23.5,23.5c0,1.82-0.21,3.59-0.6,5.29c-0.95,4.68-3.26,8.86-6.51,12.11c-4.31,4.31-10.27,6.98-16.85,6.98 c-6.58,0-12.54-2.67-16.85-6.98c-4.31-4.31-6.98-10.27-6.98-16.85c0-6.58,2.67-12.54,6.98-16.85c2.37-2.37,5.24-4.24,8.43-5.45 C55.76,33.48,58.76,32.86,61.9,32.86L61.9,32.86z M31.54,4.77v7.77h59.8V4.77c0-0.59-0.24-1.14-0.64-1.53 c-0.39-0.39-0.93-0.64-1.53-0.64H33.7c-0.59,0-1.14,0.24-1.53,0.64C31.78,3.63,31.54,4.17,31.54,4.77L31.54,4.77z M2.6,81.61h36.3 c-0.38-0.34-0.75-0.7-1.11-1.06C31.75,74.5,28,66.14,28,56.91c0-9.23,3.74-17.58,9.79-23.63H2.6V81.61L2.6,81.61z M42.14,84.21H2.6 v13.37c0,0.3,0.12,0.58,0.32,0.77c0.2,0.2,0.47,0.32,0.78,0.32h115.48c0.3,0,0.58-0.12,0.77-0.32c0.2-0.2,0.32-0.47,0.32-0.77 V84.21H80.74c-5.45,3.86-12.11,6.13-19.3,6.13C54.25,90.34,47.59,88.07,42.14,84.21L42.14,84.21z M43.26,81.81 c0.04,0.03,0.08,0.05,0.12,0.08c5.08,3.68,11.32,5.84,18.06,5.84s12.99-2.17,18.06-5.84c0.04-0.03,0.08-0.06,0.12-0.08 c1.29-0.94,2.5-1.98,3.62-3.1c5.58-5.58,9.03-13.29,9.03-21.8c0-8.51-3.45-16.22-9.03-21.8c-0.73-0.73-1.5-1.43-2.31-2.09 c-0.03-0.02-0.06-0.05-0.09-0.07c-5.3-4.3-12.05-6.87-19.4-6.87c-7.35,0-14.1,2.57-19.4,6.87c-0.03,0.03-0.06,0.05-0.09,0.07 c-0.8,0.66-1.58,1.35-2.31,2.09c-5.58,5.58-9.03,13.29-9.03,21.8c0,8.51,3.45,16.22,9.03,21.8C40.76,79.83,41.97,80.87,43.26,81.81 L43.26,81.81z M83.98,81.61h36.3V33.27H85.09c6.05,6.05,9.79,14.41,9.79,23.63c0,9.23-3.74,17.59-9.8,23.64 C84.72,80.91,84.35,81.26,83.98,81.61L83.98,81.61z M2.6,30.67h38.11c5.7-4.51,12.9-7.2,20.73-7.2s15.03,2.69,20.73,7.2h38.11 V16.24c0-0.3-0.12-0.58-0.32-0.77c-0.2-0.2-0.47-0.32-0.77-0.32H3.7c-0.3,0-0.58,0.12-0.78,0.32c-0.2,0.2-0.32,0.47-0.32,0.77 V30.67L2.6,30.67z" />
                    </g>
                  </svg>
                </div>
              </button>
            </form>
            <div className="hot-searches-contain">
              <COffcanvasTitle>HOT SEARCHES :</COffcanvasTitle>
              <div className="hot-searches-btn" style={{margin: "20px 0px"}}>
                <a href="\">Plant</a>
                <a href="\">Clock</a>
                <a href="\">Chair</a>
                <a href="\">Lamp</a>
              </div>
            </div>
          </div>
        </COffcanvasBody>
      </COffcanvas>
      {/* ===================/offcanvas for a search bar======================= */}
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

      {/* =====================all products================ */}
      <section className="header-product-bg">
        <div className="container text-center">
          <h1>All Products</h1>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {data.map((item) => {
              return (
                <>
                  {/* left column */}
                  <div className="col-xxl-3 d-flex justify-content-center">
                    <div class="outer-image">
                      <Link to={`/getsingaldata/${item._id}`}>
                        <img src={item.image[0]} alt="" />
                      </Link>
                      <div class="inner-image">
                        <Link to={`/getsingaldata/${item._id}`}>
                          <img src={item.image[1]} alt="" />
                        </Link>
                      </div>

                      <div class="products-fonts">
                        <h3>{item.title}</h3>
                        <div className="product-price">
                          <span className="first-span">${item.price}</span>
                          <span className="second-span">
                            {item.discount}% OFF
                          </span>
                        </div>
                        <p>{item.description}</p>
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
                  </div>
                  {/*/.col (left) */}
                  {/* right column */}

                  {/*/.col (right) */}
                </>
              );
            })}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* =====================/all products================ */}
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
    </div>
  );
};

export default Products;
