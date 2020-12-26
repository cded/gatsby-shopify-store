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
          loading="eager"
          alt={product.title}
        />
        <p className="product-title">{product.title}</p>
        <p className="product-price">${product.variants[0].price}</p>
      </a>
    </div>
  );
};

export default MainPageProductBox;
