

export default function SimpleTaskViewer({ taskData}) {

  
  // Toggle task status
  const toggleTaskStatus = () => {
    
  };
  
  // Empty state
  if (taskData.length === 0) {
    return (
      <div className="p-4 text-center bg-gray-100 rounded-lg">
        <p className="text-gray-600">No tasks available</p>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {taskData.map(task => (
          <div key={task._id} className="bg-white p-4 rounded-lg shadow">
            <p className="font-medium mb-3">{task.content}</p>
            
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded-full text-xs ${
                task.status 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {task.status ? 'Completed' : 'Pending'}
              </span>
              
              <button
                onClick={() => toggleTaskStatus(task._id)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {task.status ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}