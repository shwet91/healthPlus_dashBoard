import { useState } from 'react';

export default function AddGrievanceForm() {
  const [complaint, setComplaint] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // This function will handle the form submission
  // You can add your fetch logic here
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Set submitting state to show loading indicator
    setSubmitting(true);
    
    // Basic validation
    if (!complaint.trim()) {
      setMessage({ text: 'Please enter a complaint', type: 'error' });
      setSubmitting(false);
      return;
    }

    // Prepare data for sending
    const grievanceData = {
      complaint: complaint
    };
    
    console.log('Grievance data ready to send:', grievanceData);
    
    // Placeholder for fetch request
    // You'll implement your own fetch logic here
    
    // Simulating a successful submission
    setTimeout(() => {
      setSubmitting(false);
      setMessage({ text: 'Grievance submitted successfully!', type: 'success' });
      setComplaint('');
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setMessage({ text: '', type: '' });
        setShowForm(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {!showForm ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Submit a New Grievance</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300 font-medium"
          >
            Add Grievance
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-blue-700 mb-6">Submit a New Grievance</h2>
          
          {message.text && (
            <div className={`p-3 mb-4 rounded-md ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="complaint" className="block text-sm font-medium text-blue-800 mb-1">
                Complaint <span className="text-red-600">*</span>
              </label>
              <textarea
                id="complaint"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Please describe your grievance in detail..."
                required
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setComplaint('');
                  setMessage({ text: '', type: '' });
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors duration-300"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={submitting}
                className={`px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 flex items-center ${
                  submitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Grievance'
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}