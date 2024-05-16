import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
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
          <button
            className="btn btn-active"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Checkout
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Checkout Complete</h3>
              <p className="py-4">Thanks for your purchase</p>
              <div className="modal-action">
                <form method="dialog">
                  <Link to="/">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Back to homepage</button>
                  </Link>
                </form>
              </div>
            </div>
          </dialog>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
