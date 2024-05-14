import React from "react";

const Home = () => {
  return (
    <div className="skeleton w-full h-screen flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="bg-white shadow-lg w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-gray-900">
              1StopShop
            </a>
            <div className="hidden sm:flex sm:space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                Tops
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                Bottoms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                Shoes
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white shadow flex-grow flex justify-center items-center w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Tops, Bottoms, and Shoes
          </h1>
          <p className="text-lg text-gray-600">
            Explore our latest collection and find your style.
          </p>
        </div>
      </header>

      {/* Feature Items */}
      <section className="flex-grow w-full flex justify-center items-center overflow-hidden overflow-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-center overflow-y">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 1"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 1</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 2"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 2</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 3"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 3</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-t-xl">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Clothing 4"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="card-body bg-gray-800 p-4 rounded-b-xl">
                <h2 className="card-title text-white">Clothing 4</h2>
                <p className="text-white">A description of the item.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
