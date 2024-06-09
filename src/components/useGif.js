import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchData() {
      

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    setLoader(true)
    const output = await axios.get(tag?`${url}&tag=${tag}`:url);
    const imgSrc = output.data.data.images.downsized_large.url;
    setGif(imgSrc);
    setLoader(false)
  }
  useEffect(() => {
    fetchData();
  }, []);
 
 return {gif,loader,fetchData}
};

export default useGif;

