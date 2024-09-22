import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (
    <div className='w-full h-full flex flex-col background'>
      <div className='w-11/12 mx-auto'>
        <h1 className=' rounded-md w-full bg-white mt-[40px] mx-auto text-2xl text-center font-bold'>RANDOM GIFS</h1>
        <div className='flex flex-col rounded-lg mt-[40px] items-center gap-y-10'>
        <Random/>
        <Tag/>
        </div>
      </div>  
    </div>
  );
}

export default App
