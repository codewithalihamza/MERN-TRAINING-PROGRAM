import React from "react";
import ListDB from "../data/ProductsData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1 className="text-primary text-center display-4 fw-bold my-4">Products Page</h1>
     
  <div className="container">
      <div className="row">

            {ListDB.map((sprod) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
            <div className="card" style={{ width: "16rem" }}>
              <img src={sprod.pic} className="card-img-top" height={250} width={160} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{sprod.pName}</h5>
                <p className="card-text">
                  {sprod.price}
                </p>
                <Link to={`/products/${sprod.id}`} className="btn btn-primary">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        );
      })}

    </div>

</div>

    </div>
  );
};

export default Products;
