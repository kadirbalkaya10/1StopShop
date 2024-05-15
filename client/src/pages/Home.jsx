import React from "react";

const Home = () => {
  return (
    <div className="skeleton w-full h-full min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <header className="bg-white shadow flex-grow flex justify-center items-center w-full">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Discover Tops, Bottoms, and Shoes
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Explore our latest collection and find your style.
          </p>
          <button className="btn btn-active mt-4">Find your style</button>
        </div>
      </header>

      {/* Feature Items */}
      <section className="flex-grow w-full flex justify-center items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white font-bold mb-4 text-center">
            Featured Items
          </h2>
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
      <footer className="footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
        <aside className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright ©1StopShop 2024 - Where fashion meets selling.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
