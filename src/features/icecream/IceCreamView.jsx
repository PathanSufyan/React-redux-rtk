import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restock } from './iceCreamSlice'

const IceCreamView = () => {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
  return (
    <div>
        <h2>Number of Icecreams : {numOfIcecreams}</h2>
        <button onClick={()=> dispatch(ordered())}>Order Icecream</button>
        <input type="number" value={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restock(value))}>Restock Icecream</button>
    </div>
  )
}

export default IceCreamView