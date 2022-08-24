function Product({ item, cartitems, handleaddtocart }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {item.isSpan ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        ></img>
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{item.title}</h5>
            {/* <!-- Product price--> */}
            <span
              className={
                item.isEnable ? "text-muted text-decoration-line-through" : ""
              }
            >
              {item.price}
            </span>
            {item.price1}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              disabled={cartitems.some((obj) => obj.id === item.id)}
              onClick={() => handleaddtocart(item)}
              className="btn btn-outline-dark mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
