import { useEffect, useRef, useState } from "react";
import data from "./data.json";

export const ImageCarausel = () => {
  const [index, setIndex] = useState(0);
  const DataLength = data.length;
  const ref =useRef(null)

  const handleNext = () => {
      // it runs only when our useeffect call it runs only so then we gernalay use to wite a concept like 
//     if (index == Data_length - 1) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
setIndex((prev)=>{
      if(prev==DataLength-1){
            return 0;

      }
      return prev+1
})
  };
  const handlePrev = () => {
    if (index ==0) {
      setIndex(DataLength-1);
    } else {
      setIndex(index-1);
    }
  };
 useEffect(()=>{
  ref.current=setInterval(handleNext,1000)
return ()=>{
      clearInterval(ref.current)
}
 },[])
  return (
    <div className="cantainer">
      <button onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
      }}
      
       onClick={handleNext} className="Next_btn">
        {">"}
      </button>
      <img
        className="img_carausel"
        src={data[index].download_url}
        alt="img_carusel"
      />
      <button onClick={handlePrev} className="prev_btn">
        {"<"}
      </button>
    </div>
  );
};
