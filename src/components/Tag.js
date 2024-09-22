import axios from "axios";
import Spinner from "./Spinner";
import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif.js"

const Tag = () => {
  const [tag, Settag] = useState("spider man");
  const {gif , loading , apicall} = useGif(tag);

  function clickHandler() {
    apicall("spider-man");
  }

  function changeHandler(event) {
    Settag(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-[#117049] flex flex-col items-center gap-y-5 mb-16 pb-4">
      <h1 className="text-2xl uppercase font-semibold text-white">
        Random {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" />}
      <input
        type="text"
        className="w-10/12 bg-white opacity-90 rounded-md p-1 text-lg text-center"
        onChange={changeHandler}
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white opacity-90 rounded-md mb-2 p-1 text-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;