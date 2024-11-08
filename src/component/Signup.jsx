// import React from "react";
// import { Link } from 'react-router-dom'
// import Login from '../component/Login'

// function Signup() {
//   return (
//     <>
//     <div className="flex h-screen items-center justify-center">
//     <div  className="w-[600px]">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
//     </form>
//     <h3 className="font-bold text-lg">Sign up</h3>
//     <div className='mt-4 space-y-2'><span>Name</span><br/>
//     <input type="text" placeholder='enter your Name' className='w-80 px-3 border rounded-md'/>
//     </div>
//     <div className='mt-4 space-y-2'><span>Email</span><br/>
//     <input type="text" placeholder='enter your email address' className='w-80 px-3 border rounded-md'/>
//     </div>
//     <div className='mt-4 space-y-2'><span>Password</span><br/>
//     <input type="password" placeholder='enter your Password' className='w-80 px-3 border rounded-md'/>
//     </div>
//     {/* /*button */}
//     <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Sign up
//               </button>
//               <p>
//                 Have a Account ?{" "}
//                 <button
//                   to="/"
//                   className="underline text-blue-500 cursor-pointer"
//                   onClick={() =>
//                     document.getElementById("my_modal_3").showModal()
//                   }
//                 >
//                   Login
//                 </button>{" "}
//                 <Login/>
//               </p>
//               </div>
//   </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Signup

import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from '../component/Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);  // This will log name, email, and password to the console
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Sign up</h3>

              <div className="mt-4 space-y-2">
                <span>Name</span><br/>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 border rounded-md"
                  {...register("Name", { required: "Name is required" })}
                /><br/>
                {errors.Name && <span className="text-red-500">{errors.Name.message}</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Email</span><br/>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-80 px-3 border rounded-md"
                  {...register("Email", { required: "Email is required" })}
                /><br/>
                {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password</span><br/>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 border rounded-md"
                  {...register("Password", { required: "Password is required" })}
                /><br/>
                {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-6">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Sign up
                </button>
                <p>
                  Have an Account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
