import React, { useState } from 'react';
import JoinProgramForm from '../components/program/JoinProgram';
import GetProgram from '../components/program/GetProgram';
import Grievances from '../components/Grievances/Grievances';
import TaskList from '../components/Task/TaskViewer';
import { useSelector } from 'react-redux';

export default function ProfileComponent() {
  const [activeTab, setActiveTab] = useState('about');
  const userData = useSelector((state) => state.auth.userData)
  
  const user = {
    name: userData.fullname,
    role: "",
    // experience: "15+ years",
    // education: "MD, Harvard Medical School",
    email: `${userData.email}` ,
    phone: "(123) 456-7890",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience specializing in preventive cardiology and heart disease management. She has performed over 1,000 cardiac procedures and is passionate about patient education and preventive care.",

    
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 pt-12 pb-24 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="relative mb-6 md:mb-0 md:mr-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src={userData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* User Info */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-blue-100">{user.role}</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              <span className="bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full text-sm">{user.experience}</span>
              <span className="bg-blue-700 bg-opacity-50 px-3 py-1 rounded-full text-sm">{user.education}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Buttons */}
      <div className="flex justify-center mt-5">
        <div className="bg-white rounded-lg shadow-md flex divide-x divide-gray-200">
          <button 
            onClick={() => handleTabChange('about')}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'about' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Current Task
          </button>
          <button 
            onClick={() => handleTabChange('appointments')}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'appointments' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Join Program
          </button>
          <button 
            onClick={() => handleTabChange('qualifications')}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'qualifications' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          >
            My Programs
          </button>
          <button 
            onClick={() => handleTabChange('publications')}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'publications' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Grievances
          </button>

          <button 
            onClick={() => handleTabChange('payment')}
            className={`px-6 py-3 font-medium transition-colors duration-200 ${activeTab === 'publications' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
          >
            Payment
          </button>
        </div>
      </div>
      
      {/* Tab Content with Animation */}
      <div className="p-8 relative">
        {/* About Tab */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeTab === 'about' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <TaskList></TaskList>
        </div>
        
        {/* Appointments Tab */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeTab === 'appointments' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <JoinProgramForm></JoinProgramForm>
        </div>
        
        {/* Qualifications Tab */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeTab === 'qualifications' ? ' opacity-100' : ' opacity-0'
          }`}
        >
        
        <GetProgram></GetProgram>

        </div>
        
        {/* Publications Tab */}
        <div 
          className={` absolute top-16 transition-all duration-500 ease-in-out overflow-hidden  ${
            activeTab === 'publications' ? ' opacity-100' : ' opacity-0'
          }`}
        >
            <Grievances></Grievances>
        </div>

         {/* payment Tab */}
         <div 
          className={`absolute top-16 transition-all duration-500 ease-in-out overflow-hidden ${
            activeTab === 'payment' ? ' opacity-100' : ' opacity-0'
          }`}
        >
        
        <h1 className='text-center' >No payment History yet </h1>

        </div>
      </div>
    </div>
  );
}