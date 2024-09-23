import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, decrement, incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
  const [amount, setAmount] = useState(0)  
  const { count } = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrAmount = () => {
    if(amount)
    {
      //dispatch the action
      dispatch(incrementByAmount(amount))
    }
    else
    {
      alert("please enter an increment amount")
    }
  }
  return (
    <div className='border rounded p-5 text-center'>
      <h1 style={{ fontSize: '100px' }}>{count}</h1>
      <div className='d-flex justify-content-between mt-5'>
        <button onClick={() => dispatch(decrement())} type="button" className='btn  btn-warning'>Decrement</button>
        <button onClick={() => dispatch(reset())} type="button" className='btn  btn-danger '>Reset</button>
        <button onClick={() => dispatch(increment())} type="button" className='btn  btn-success'>Increment</button>
      </div>
      <div className='d-flex gap-2 mt-4'>
        <input onChange={e => setAmount(e.target.value)} type="text" className='form-control' />
        <button onClick={handleIncrAmount} type="button" className='btn btn-primary'>Increment by amount</button>
      </div>
    </div>
  )
}

export default Counter
