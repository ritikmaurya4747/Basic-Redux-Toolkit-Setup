import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment , incrementByValue } from '../Features/showSlice';

function SubChild1() {
  const data = useSelector((state)=>{
    // console.log(state.show.value);
    return state.show.value
  });
  const dispatch = useDispatch();

  return (
    <div>
        <h1>SubChild1 - {data}</h1>
        <div className="btn">
        <button onClick={()=>dispatch(increment())}>Click Me</button>
        <button onClick={()=>dispatch(incrementByValue(10))}>increment by 10</button>
        </div>
    </div>
  )
}

export default SubChild1