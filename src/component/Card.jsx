// import React from 'react'

// function Card({item}) {
//   return (
//     <>
//     <div>
//     <div className="card bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src={item.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       Shoes!
//       <div className="badge badge-secondary">NEW</div>
//     </h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">Fashion</div>
//       <div className="badge badge-outline">Products</div>
//     </div>
//   </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Card

import React from "react";
function Card({ item }) {
  console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item?.image || "placeholder.jpg"} alt={item?.name || "No Image Available"} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item?.name || "No Name"}
              <div className="badge badge-secondary">{item?.category || "N/A"}</div>
            </h2>
            <p>{item?.title || "No Title Available"}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item?.price || "0.00"}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Free!!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;




