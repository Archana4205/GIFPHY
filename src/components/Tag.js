import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
const [tag,setTag]=useState('');
 const {gif,loader,fetchData}=useGif(tag);
 
  function changeHandler(e){
    setTag(e.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500 mt-[20px] rounded-lg border border-black flex flex-col items-center gap-y-6">
      <h1 className="text-2xl font-bold text-black underline">A RANDOM GIF</h1>
      {loader?(<Spinner/>):(<img src={gif} width="450" />)}
      <input onChange={changeHandler} className="bg-white w-1/2 p-3 rounded-md"/>
      <button
        onClick={()=>{fetchData()}}
        className="bg-white w-1/2 font-bold rounded-md mb-3"
        value={tag}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
