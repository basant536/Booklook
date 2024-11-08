// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"


// function Login() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()
//   const onSubmit =   (data) => console.log(data)
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>
//     <div className='mt-4 space-y-2'><span>Email</span><br/>
//     <input type="text" placeholder='enter your email address' className='w-80 px-3 border rounded-md'
//     {...register("Email", { required: true })} />
//     </div>
//     <div className='mt-4 space-y-2'><span>Password</span><br/>
//     <input type="password" placeholder='enter your Password' className='w-80 px-3 border rounded-md'
//     {...register("Password", { required: true })} 
//     />
//     </div>
//     {/* /*button */}
//     <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link
//                   to="/Signup"
//                   className="underline text-blue-500 cursor-pointer"
//                 >
//                   Signup
//                 </Link>{" "}
//               </p>
//               </div>
//   </div>
// </dialog>
//     </div>
//   )
// }

// export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)  // This will show email and password in console
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Login</h3>
            
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
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login

