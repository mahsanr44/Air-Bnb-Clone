import React from "react";
import { CardData } from "./CardData";

const Card = () => {
  return (
    <div className="md:flex mt-7 lg:mx-16 px-16  md:px-1">
      {CardData.map((item,i) => {
        return (
          <>
            <div key={i}  className=" bg-white rounded-lg md:px-8 relative w-full max-w-xs overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  className=" rounded-t-lg"
                  src={item?.img}
                  alt="card 1"
                  width={250}
                  height={50}
                />
                <span className="absolute top-0 left-0 m-2 rounded-sm px-3 py-1 bg-white text-center text-sm font-medium  uppercase">
                  {item?.badge}
                </span>
              </div>
              <div className=" justify-center">
                <div className="flex items-center mt-2.5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="px-1 text-xs font-semibold ">{item.star}</span>
                  <span className="px-1 text-xs font-semibold text-gray-500">
                   { `(${item.rate})` } - {item.country}
                  </span>
                </div>
                <h5 className=" tracking-tight text-gray-900 my-0.5">
                  {item.title}
                </h5>
                <div className="flex my-0.5">
                  <p className="font-semibold text-sm">From ${item.price}</p>
                  <p className="text-sm mb-10">/person</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
