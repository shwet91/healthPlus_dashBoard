import React, { useEffect, useState } from 'react'
import ComplaintCards from './Card'
import api from '../../backend/api'
import { useSelector } from 'react-redux'

function Grievances() {
  // list all the grievances
  const [grievances , setGrievances] = useState([])
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    const asyncFunction = async() => {
      const fetchGrievances = await fetch(`${api.getGrievances}/${userData._id}` , {
        method : "GET"
      }).then((res) => res.json())



    await Promise.all( fetchGrievances.data.map(async(e ) => {
        const fetchMentor = await fetch(`${api.getUserDetails}/${e.mentor}` , {
          method : "GET"
        }).then((res) => res.json())

        e.mentorDetails = fetchMentor.data
      }))

      console.log(fetchGrievances)
      setGrievances(fetchGrievances.data)
    }

    asyncFunction()
  } , [])


  return (
    
      <ComplaintCards cardData={grievances}></ComplaintCards>
    
  )
}

export default Grievances