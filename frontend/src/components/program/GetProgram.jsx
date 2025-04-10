import React, { useEffect, useState } from 'react'
import ProgramInfoWithForm from '../Program'
import api from '../../backend/api'
import { useSelector } from 'react-redux'

function GetProgram() {

    const userData = useSelector((state) => state.auth.userData)
    const [ clientPrograms , setClientPrograms ]= useState([])

    useEffect(() => {
        const asyncFunction = async() => {
            const fetchPrograms = await fetch(`${api.getClientPrograms}/${userData._id}` , {
                method : "GET"
            }).then((res) => res.json())

            console.log(fetchPrograms)
            setClientPrograms(fetchPrograms.data)
        }

        asyncFunction()
    } , [])

  return (
    <div>
        {
            clientPrograms.map((e , i) =>   <ProgramInfoWithForm key={i} programData={e}></ProgramInfoWithForm> )
        }
    </div>
  )
}

export default GetProgram