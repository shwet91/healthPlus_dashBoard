import { useState } from 'react';
import api from '../../backend/api';
import { useSelector } from 'react-redux';


export default function JoinProgramForm() {
    const userData = useSelector((state) => state.auth.userData)

  // State for form inputs
  const [formData, setFormData] = useState({
    programName: '',
    programAim: '',
    programDetails: '',
    userId : `${userData._id}`
  });
  
  // State for form submission and feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });
  const [showForm, setShowForm] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  
  // Handle form submission
  const onSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.programName.trim() || !formData.programAim.trim() || !formData.programDetails.trim()) {
      setFormMessage({ text: 'Please fill in all required fields', type: 'error' });
      setIsSubmitting(false);
      return;
    }
    
    // Log the data that would be sent to the server
    console.log('Program join request data:', formData);
    
    // This is where you would add your fetch logic
    // Example:
    const joinProgram = await fetch(`${api.joinProgram}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json())

    console.log(joinProgram)
    
    // Simulating a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormMessage({ text: 'Your program join request has been submitted!', type: 'success' });
      
      // Reset form after success
      setTimeout(() => {
        resetForm();
        setShowForm(false);
      }, 2000);
    }, 1000);
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      programName: '',
      programAim: '',
      programDetails: '',
      userId : `${userData._id}`
    });
    setFormMessage({ text: '', type: '' });
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
      {!showForm ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Join Existing Program</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
          >
            Join Program
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-blue-700 mb-6">Join Existing Program</h2>
          
          {formMessage.text && (
            <div className={`p-3 mb-4 rounded-md ${
              formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {formMessage.text}
            </div>
          )}
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="programName" className="block text-sm font-medium text-blue-800 mb-1">
                Program Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="programName"
                value={formData.programName}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter program name you want to join"
                required
              />
            </div>
            
            <div>
              <label htmlFor="programAim" className="block text-sm font-medium text-blue-800 mb-1">
                Program Aim <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="programAim"
                value={formData.programAim}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What is the aim of this program?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="programDetails" className="block text-sm font-medium text-blue-800 mb-1">
                Program Details <span className="text-red-600">*</span>
              </label>
              <textarea
                id="programDetails"
                value={formData.programDetails}
                onChange={handleChange}
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Why do you want to join this program?"
                required
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors duration-300"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 flex items-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Join Request'
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}