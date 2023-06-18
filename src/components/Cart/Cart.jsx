import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  // if or if else
  let message;
  if (cart.length === 0) {
    message = <p> Please Add Some Products</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxxx</h3>
        <p>
          <small>Thanks for wasting your Money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3 className={cart.length === 2 ? 'blue' : 'red'}>Order Summary: {cart.length}</h3>
      <p className={`bold bordered ${cart.length ===3 ? 'lightpink': 'purple'}`}>somthing</p>
      {
        //ternary ?
        cart.length > 2 ? (
          <span className="purple">Aro Kino</span>
        ) : (
          <span>Foinnir Put !!</span>
        )
      }
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {
        // logical &&
        cart.length === 2 && <p>Dubble Bonanzo!!</p>
      }
      {
        // logical or ||
        cart.length === 3 || <h3>tinta to hoilo na!!!</h3>
      }
    </div>
  );
};

export default Cart;
