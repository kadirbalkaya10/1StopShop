/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

// import { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { useState } from 'react';

// // stripePromise returns a promise with the stripe object as soon as the Stripe package loads
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  // const [state, setState] = useState();
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // // Then we should redirect to the checkout with a reference to our session id
  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  // // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // // If so, invoke the getCart method and populate the cart with the existing from the session

  // function calculateTotal() {
  //   let sum = 0;
  //   state.cart.forEach((item) => {
  //     sum += item.price * item.purchaseQuantity;
  //   });
  //   return sum.toFixed(2);
  // }

  // // When the submit checkout method is invoked, loop through each item in the cart
  // // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  // function submitCheckout() {

  //   getCheckout({
  //     variables: { 
  //       products: [...state.cart],
  //     },
  //   });
  // }

  return (
    <div className="skeleton w-full h-full min-h-screen flex flex-col justify-center items-center">
      <header className="bg-white shadow flex-grow flex justify-center items-center w-full py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Shopping Cart
        </h1>
      </header>
      <section className="flex-grow w-full flex justify-center items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Cart Item */}
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 1"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white mb-2">Clothing 1</h2>
                <p className="text-white text-center">
                  A description of the item.
                </p>
                <div className="card-actions flex justify-between items-center mt-4">
                  <p className="text-white">$25.99</p>
                  <button className="btn btn-primary">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Checkout section */}
      <div className="flex justify-center items-center p-4 text-base-content">
        <aside className="flex items-center">
          <p className="text-xl font-bold mr-4">Total: $45.98</p>
          <button className="btn btn-active">Checkout</button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
