import Random from './components/Random';
import Tag from './components/Tag';
export default function App() {
  return (
    <div className="flex flex-col w-full h-full background relative   items-center gap-7 p-7">
      <h1 className="bg-white rounded-md  w-11/12  text-center text-3xl py-2 mt-[40px]  font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center" >
     <Random/>
     <Tag/>
      </div>
    </div>
  );
}
