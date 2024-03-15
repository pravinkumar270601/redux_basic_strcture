import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset,incrementByUserAmount} from './counterSlice'

const Counter = () => {
    const [incUserAmount,setIncUserAmount]= useState()
    const count = useSelector((state)=> state.countername.mycount)
    const dispatch = useDispatch()
    
    const addVal = Number(incUserAmount) || 0
    
    // I created the fn for add value  button 
    // do some logic if user enter strings in input field
    // const checkval  =()=>{
    // if(addVal===0){
    //   setIncUserAmount(0)
    //   alert("please enter numbers only")
    // } 
    // }
    const resetAll =()=>{
      setIncUserAmount(0)
      dispatch(reset())
    }

  return (
    <>
    <div className='mycount'>{count}</div>
    <div ><button className='mybtn' onClick={()=>dispatch(increment()) }>+</button> <button className='mybtn' onClick={()=>dispatch(decrement()) }>-</button> </div>
    <input
      type='text'
      value={incUserAmount}
      onChange={(e)=> setIncUserAmount(e.target.value) }
    />
    <button onClick={()=> dispatch(incrementByUserAmount(addVal))}>add value</button>
    <div>
    <button onClick={resetAll}>reset Value</button>
    </div>
    </>
  ) 
}

export default Counter