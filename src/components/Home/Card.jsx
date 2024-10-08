// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ filteredItems }) => {
//   return (
//     <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-3 border border-black sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
//       {filteredItems.slice(0, 8).map((item) => (
//         <div key={item.id}>
//           <Link to={`/shop/${item.id}`}>
//             <img
//               src={item.imgUrl}
//               alt={item.title}
//               className="mx-auto w-full hover:scale-105 transition-all duration-300"
//             />
//           </Link>
//           <div className="mt-4 px-4">
//             <h4 className="text-base font-semibold mb-2">{item.title}</h4>

//             <div className="flex justify-between">
//               <p className="text-black/50">{item.cate}</p>
//               <p className="font-semibold">${item.price}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;