


// const server = "http://localhost:8000/api/v1"
const server = "https://healthplus-dashboard.onrender.com/api/v1"

export default {

// user
getUserDetails  : `${server}/user/getUserDetails`, // send user Id as params and GET

    // program
    joinProgram : `${server}/program/joinProgram`, // POST
    getClientPrograms : `${server}/program/getClientPrograms`,

    // grievances

    addGrievances: `${server}/grievance/createGrievance`,
    getGrievances: `${server}/grievance/getGrievances`, // send user Id as params

    // Task 
    createTask: `${server}/task/createTask`, // send data in body and POST
    listTask: `${server}/task/getTask` , // send userId in params and GET
    toggleTaskComplete: `${server}/task/toggleTaskComplete`, // send taskId as params and POST
}