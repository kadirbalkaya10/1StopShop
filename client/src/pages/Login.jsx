// reference Login.jsx in module 24 solutions
import { Link } from "react-router-dom";
//add additional dependencies
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  //do we add props?
  //add code to
  //useState for form and useMutation for login seed-data
  //update state on form input changes
  //handleChange

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  //update state on form input changes
  //handleChange; main
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };-seed-data
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        //login from the auth.js
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
    //clear form values with setFormState
    setFormState({
      email: "",
      password: "",
    });
  }; main

  return (
    <section className='flex justify-center items-center'>
      <div className='container skeleton border-2 border-primary w-11/12 h-screen flex justify-center items-center flex-col  mt-10'>
        <form onSubmit={handleFormSubmit} className='w-11/12 flex justify-center flex-col'>
          <h1 className='text-4xl text-white mb-12 text-center'>Login</h1>
          <label className='input input-bordered bg-primary text-white flex items-center gap-2 m-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70 m-1'>
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
             type='text'
             name='email'
             value={formState.email}
             onChange={handleChange} 
             className='grow '
             placeholder='Email' 
             />
          </label>

          <label className='input input-bordered flex bg-primary text-white items-center gap-2 m-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='max-w-4 max-h-4 opacity-70 m-1'>
              <path
                fillRule='evenodd'
                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                clipRule='evenodd'
              />
            </svg>
            <input 
            type='password' 
            name='password'
             value={formState.password}
             onChange={handleChange} 
            className='grow' 
            placeholder='Password' 
            />
          </label>
          <button className='btn btn-primary gap-2 m-3 h-12  bg-primary text-white  btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
            Login
          </button>
        </form>
        <Link key={1} to={"/signup"} className='mt-5 hover:text-orange-200'>
          Signup instead
        </Link>
      </div>
    </section>
  );
};

export default Login;
