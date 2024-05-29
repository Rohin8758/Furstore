<Offcanvas show={show} onHide={handleClose} placement="end">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    {console.log(data)}
    {cartData.length
      ? cartData.map((item) => {
          total += parseInt(item.productPrice);
          console.log(item);
          return (
            <>
              <div className="container">
                <div className="singal-pro1">
                  <div className="outer1-image1 d-flex">
                    <img
                      src={item.productImage ? item.productImage[0] : ""}
                      alt=""
                    />
                    <div class="inner11-image">
                      <img
                        src={item.productImage ? item.productImage[1] : ""}
                        alt=""
                      />
                    </div>
                    <div class="products11-fonts">
                      <h5 className="title-text">{item.productTitle}</h5>
                      <div className="count-num d-flex">
                        <button className="pluse" onClick={decrement}>
                          -
                        </button>
                        <p className="coun">{item.productQty}</p>
                        <button className="badbaki" onClick={increment}>
                          +
                        </button>
                        <span className="first1-span1">
                          ${item.productPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      : null}
    <hr className="linee" />
  </Offcanvas.Body>
  <div className="container">
    <p>Subtotal:</p>
    <p className="shiping">You've got free shipping!</p>
  </div>
  <div className="container d-flex justify-content-center align-items-center">
    <div>
      <ProgressBar variant="success" now={100} className="bar" />
    </div>
    <div>
      <h5 className="per">100%</h5>
    </div>
  </div>
  <div className="container">
    <button className="cart1">View cart</button>
  </div>
  <div className="container">
    <button className="checkout">Checkout</button>
  </div>
</Offcanvas>;

{
  /* ======================= end Add to Cart ====================== */
}
