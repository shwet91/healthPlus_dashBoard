import React from 'react'
import { useSelector } from 'react-redux'

function Store() {

    const userData = useSelector((state) => state.auth.userData)

    const clickHandler = () => {
      console.log("clicked")
        console.log(userData)
    }
  return (
    <div>
        <button onClick={clickHandler} >STORE</button>
    </div>
  )
}

export default Store