import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
const {gif,loader,fetchData}=useGif();

  return (
    <div className="w-1/2  bg-green-500 mt-[20px] rounded-lg border border-black flex flex-col items-center gap-y-6">
      <h1 className="text-2xl font-bold text-black underline">A RANDOM GIF</h1>
      {loader?(<Spinner/>):(<img src={gif} width="450" />)}
      
      <button
        onClick={()=>fetchData()}
        className="bg-white w-1/2 font-bold rounded-md mb-3"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
