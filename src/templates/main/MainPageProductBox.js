import React from 'react';
import Img from 'gatsby-image';
import './product-box.css';

const MainPageProductBox = (props) => {
  const product = props.product;
  return (
    <div className="box productBox" key={product.title}>
      <a href={`/product/${product.handle}`}>
        <Img
          fluid={product.fields.firstImage.localFile.childImageSharp.fluid}
          key={product}
          fadeIn={false}
          loading="lazy"
          alt={product.title}
        />
        <div className="product-details">
          <p className="product-title">{product.title}</p>
          <p className="product-price">
            <p style={{ marginBottom: 0 }}>${product.variants[0].price}</p>
            <p className="product-available">IN STOCK</p>
          </p>
        </div>
      </a>
    </div>
  );
};

export default MainPageProductBox;
