const Nav = () => {
  return (
    <div className='skeleton w-full h-24 flex flex-col justify-center items-center'>
      <div className='navbar bg-base-500'>
        <div className='flex-1'>
          <a href='/' className='btn btn-ghost text-xl'>
            1StopShop
          </a>
        </div>
        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a href='/login'>Login</a>
              </li>
              <li>
                <a href='/signup'>Signup</a>
              </li>
            </ul>
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>0</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'>
              <div className='card-body'>
                <span className='font-bold text-lg'># Items</span>
                <span className='text-info'>Subtotal: $0</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
