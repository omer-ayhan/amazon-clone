import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, img, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the initial state
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
