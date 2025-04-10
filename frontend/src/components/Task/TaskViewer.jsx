import React, { useEffect, useState } from 'react'
import TaskViewer from './TaskCard'
import api from '../../backend/api'
import { useSelector } from 'react-redux'
import SimpleTaskViewer from './TaskCard'

function TaskList() {

    const userData = useSelector((state) => state.auth.userData)
    const [taskData , setTaskData] = useState([])



    useEffect(() => {
        const asyncFunction = async () => {
            const fetchTask = await fetch(`${api.listTask}/${userData._id}` , {
                method : "GET"
            }).then((res) => res.json())

            console.log(fetchTask)

            setTaskData(fetchTask.data)
        }

        asyncFunction()
    }, [] ) 


  return (
    <div>
               <SimpleTaskViewer taskData={taskData} ></SimpleTaskViewer>
    </div>
  )
}

export default TaskList