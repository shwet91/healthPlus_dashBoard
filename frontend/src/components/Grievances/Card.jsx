import { useState } from 'react';

export default function ComplaintCards( {cardData} ) {
  // Sample data for the cards
  const [cards, setCards] = useState([
    { id: 1, complaint: "Website loading too slow", solution: "", status: "Pending", mentor: "John Doe" }
  ]);

  // Function to add a solution to a card
  const addSolution = (id, newSolution) => {
    setCards(cards.map(card => 
      card.id === id 
        ? { ...card, solution: newSolution, status: "Resolved" } 
        : card
    ));
  };

  // Component for individual cards
  const Card = ({ id, complaint, solution, status, mentor }) => {
    const [newSolution, setNewSolution] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = () => {
      if (newSolution.trim()) {
        addSolution(id, newSolution);
        setNewSolution("");
        setIsEditing(false);
      }
    };

    return (
      <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-blue-300">
        <div className="bg-blue-500 p-3 text-white font-semibold">
          Complaint #{id}
        </div>
        
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-sm font-medium text-blue-800">Complaint:</h3>
            <p className="text-gray-700">{complaint}</p>
          </div>
          
          <div className="mb-3">
            <h3 className="text-sm font-medium text-blue-800">Solution:</h3>
            {solution ? (
              <p className="text-gray-700">{solution}</p>
            ) : (
              <p className="text-gray-500 italic">No solution provided yet</p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <h3 className="text-sm font-medium text-blue-800">Status:</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === true ? "bg-green-100 text-green-800" : 
                status === false ? "bg-yellow-100 text-yellow-800" : 
                "bg-red-100 text-red-800"
              }`}>
                {status ? "Resolved" : "In Progress"}
              </span>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-blue-800">Mentor:</h3>
              <p className="text-gray-700">{mentor}</p>
            </div>
          </div>
          
          {/* {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Add Solution
            </button>
          ) : (
            <div className="mt-2">
              <textarea
                value={newSolution}
                onChange={(e) => setNewSolution(e.target.value)}
                placeholder="Enter solution..."
                className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                rows="2"
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setNewSolution("");
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  };

  return (
    <div className="container max-auto p-4 ">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Complaint Management</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card , i) => (
          <Card
            key={i}
            id={i + 1}
            complaint={card.complaint}
            solution={card.solution}
            status={card.status}
            mentor={card.mentorDetails.fullname}
          />
        ))}

           {/* <Card
            id={cards[0].id}
            complaint={cards[0].complaint}
            solution={cards[0].solution}
            status={cards[0].status}
            mentor={cards[0].mentor}
          /> */}
      </div>
    </div>
  );
}