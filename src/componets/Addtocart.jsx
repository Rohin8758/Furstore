// ===================add to cart=================

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TbBellRingingFilled } from "react-icons/tb";

function Addtocart(props) {
  const [data, setData] = useState([]);
  const [cartId, setCartId] = useState([]);
  const isLogged = sessionStorage.getItem("isLogged");
  const navigate = useNavigate();
  var total = 0;
  let userid = sessionStorage.getItem("userId");
  useEffect(() => {
    if (!userid) {
      navigate("/login");
    }
    axios
      .get(`http://localhost:5000/cart/getalldataofcart/${userid}`)
      .then(async (res) => {
        console.log(res);
        await setData(res.data.addtocartdata.user.product);
        setCartId(res.data.addtocartdata.cartId);
      });
  }, []);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={true} className="bg-cyan text-center">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="container-fluid"
          >
            YOUR ORDER
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <div className="container">
              <div className="diamond-Halo d-flex align-items-center">
                <TbBellRingingFilled className="m-1" />
                <p>
                  <b>Diamond Halo Stud Donec - Small / Green</b> - has been
                  added to the shopping cart.
                </p>
              </div>
              <div className="addtoproducts">
                <div className="row">
                  {console.log(data)}
                  {data.map((item) => {
                    return (
                      <>
                        <div className="d-flex align-items-center text-center col-xxl-4 col-xl-4 col-lg-4 col-md-5 single-cart-product">
                          <img
                            src={item.productImage ? item.productImage[0] : ""}
                            alt=""
                            width={"30%"}
                          />
                          <div className="product-info">
                            <p>{item.productTitle}</p>
                            <p>&#x20B9; {item.productPrice}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="bottom-products">
                <hr />
                <div className="sugetion-of-products">
                  <h6 style={{ marginLeft: "12px", fontWeight: "600" }}>
                    YOU MAY ALSO LIKE THESE PRODUCTS
                  </h6>
                  <div className="all-bottom-products d-flex justify-content-between m-3">
                    <div className="outsider col-xxl-4 text-center">
                      <img
                        src={require("../componets/img/12_250x.avif")}
                        alt=""
                      />
                      <div className="insider">
                        <img
                          src={require("../componets/img/12a_250x.avif")}
                          alt=""
                        />
                      </div>
                      <div className="outsider-contain mt-3">
                        <h6>Diamond Halo Stud Magnis</h6>
                        <div style={{ margin: "10px" }}>
                          <span>$325.00</span>
                          <strike>$410.00</strike>
                        </div>
                      </div>
                    </div>
                    <div className="outsider col-xxl-4 text-center">
                      <img
                        src={require("../componets/img/9_250x.avif")}
                        alt=""
                      />
                      <div className="insider">
                        <img
                          src={require("../componets/img/9a_250x.avif")}
                          alt=""
                        />
                      </div>
                      <div className="outsider-contain mt-3 text-center">
                        <h6>Diamond Halo Stud Earrings</h6>
                        <div style={{ margin: "10px" }}>
                          <span>$472.00</span>
                          {/* <strike>$410.00</strike> */}
                        </div>
                      </div>
                    </div>
                    <div className="outsider col-xxl-4 text-center">
                      <img
                        src={require("../componets/img/14_250x.avif")}
                        alt=""
                      />
                      <div className="insider">
                        <img
                          src={require("../componets/img/14a_250x.avif")}
                          alt=""
                        />
                      </div>
                      <div className="outsider-contain mt-3">
                        <h6>Diamond Halo Stud Massa</h6>
                        <div style={{ margin: "10px" }}>
                          <span>$269.00</span>
                          {/* <strike>$410.00</strike> */}
                        </div>
                      </div>
                    </div>
                    <div className="outsider col-xxl-4 text-center">
                      <img
                        src={require("../componets/img/11_250x.avif")}
                        alt=""
                      />
                      <div className="insider">
                        <img
                          src={require("../componets/img/11a_250x.avif")}
                          alt=""
                        />
                      </div>
                      <div className="outsider-contain mt-3">
                        <h6>Diamond Halo Stud Ligula</h6>
                        <div style={{ margin: "10px" }}>
                          <span>$569.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Addtocart;
