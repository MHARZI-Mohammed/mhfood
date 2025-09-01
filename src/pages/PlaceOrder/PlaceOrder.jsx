import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street number" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}MAD</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount()===0?0:8}MAD</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount() + 8}MAD</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder