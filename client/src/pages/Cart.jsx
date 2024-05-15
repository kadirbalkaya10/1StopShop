import React from "react";

const Cart = () => {
  return (
    <div className="skeleton w-full h-full min-h-screen flex flex-col justify-center items-center">
      <header className="bg-white shadow flex-grow flex justify-center items-center w-full py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Your Shopping Cart
        </h1>
      </header>

      <section className="flex-grow w-full flex justify-center items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 1"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 1</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-between items-center mt-4">
                  <button className="btn btn-primary">Remove</button>
                  <p className="text-white">$25.99</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 2"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 2</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-between items-center mt-4">
                  <button className="btn btn-primary">Remove</button>
                  <p className="text-white">$19.99</p>
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
