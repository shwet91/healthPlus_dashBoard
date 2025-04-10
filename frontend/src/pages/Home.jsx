import HealthApp from "./Slider"
import { login } from "../store/authSlice"
import { useDispatch } from 'react-redux'
import { useEffect } from "react"



function Home() {

const dispatch = useDispatch()


useEffect(() => {

  const asyncFunction = async() => {
   try {
    console.log("started")
     const fetchUserData = await fetch( "http://localhost:8000/api/v1/user/getUserDetails/67f74711d73cc2fe2907f54b"  , {
       method : "GET"
     }).then((res) => res.json())
   
     console.log(fetchUserData.data)

     dispatch(login({
      data : fetchUserData.data
    }))



   } catch (error) {
    console.log(error.message)
   }
  }

  asyncFunction()
  
} , [])

  return (
    <div>
      <HealthApp></HealthApp>
    </div>
  )
}

export default Home