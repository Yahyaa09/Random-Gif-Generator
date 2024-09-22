import Spinner from './Spinner'
import React, { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';
  
  const Random = () =>  {

	const {gif , loading , apicall} = useGif();
	  
	function clickHandler()
	{
		apicall();
	}

	return (
	  <div className='w-1/2 bg-green-500 rounded-lg border border-[#117049] flex flex-col items-center gap-y-5 pb-4'>
	  <h1 className='text-2xl uppercase font-semibold text-white'>Random GIF</h1>
	  {
		loading ? (<Spinner/>) : (<img src={gif} alt="gif"/>)
	  } 
	  <button onClick={clickHandler} className='w-10/12 bg-white opacity-90 rounded-md my-2 p-1 text-lg'>Generate</button>
	  </div>
	);
  }
  
  export default Random;
  