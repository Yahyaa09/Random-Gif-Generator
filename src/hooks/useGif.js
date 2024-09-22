import axios from "axios";
import Spinner from "../components/Spinner";
import React, { useEffect, useState } from "react";

const useGif = (tag) => {
  const [gif, Setgif] = useState("");
  const [loading, Setloading] = useState(false);
  const url1 = 'https://api.giphy.com/v1/gifs/random?api_key=LpjXUzDXvk3iDDqcjk6dJvPFWBSZBdTE&tag=&rating=g';
  const url2 = `https://api.giphy.com/v1/channels/search?api_key=GGaSZlprHCmcsD4HeYyQF5kAMQ11c0fy&q=${tag}&limit=25&offset=0`;

  async function apicall(tag) {
    try {
      
      Setloading(true);
      const { data } = await axios.get(tag ? url2 : url1);

      const imageSource = tag? 
          data.data[0].featured_gif.images.original.url
        : data.data.images.downsized_large.url;
      
      Setgif(imageSource);
      console.log(imageSource);
    } catch (e) {
      console.log("error in fetching data", e);
    } finally {
      Setloading(false); // Set loading to false when the API call finishes
    }
  }

  useEffect(() => {
    tag ? (apicall()) : (apicall(tag));
  }, []);

  return {gif , loading , apicall};

}

export default useGif