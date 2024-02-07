import React from "react";

const Card = ({ id, name, type, image, type2 }) => {
  return (
    <div className=" bg-slate-400 h-50 w-36 p-4">
      <div className="text-center">
        <small className=" font-bold underline">#{id}</small>
      </div>
      <img className="w-32 h-32" src={image} />
      <div className="flex flex-wrap">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <small>Type: {type2}</small>
      </div>
    </div>
  );
};

export default Card;
