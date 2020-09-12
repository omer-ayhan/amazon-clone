import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  console.log();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(val) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>
                {'$' +
                  Object.keys(basket)
                    .map((key) => {
                      if (key !== undefined) return basket[key].price;
                    })
                    .reduce((a, b) => a + b, 0)}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // part of the homework
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
