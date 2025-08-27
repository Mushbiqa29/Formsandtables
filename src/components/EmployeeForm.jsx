import { useState } from 'react';

const EmployeeForm = ({ editIndex, formData, handleFormData, handleSubmit }) => {
    return (
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-xl shadow-sm bg-white p-6 m-4">
            <h1 className="text-2xl font-bold mb-6 text-blue-600">
                <i className="fas fa-user-plus mr-2"></i>
                Employee Information Form
            </h1>
            <form className="w-full max-w-4xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-signature mr-2"></i>
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            placeholder="Enter employee name" 
                            onChange={(e) => handleFormData("name", e.target.value)} 
                            required 
                            value={formData.name}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-briefcase mr-2"></i>
                            Position <span className="text-red-500">*</span>
                        </label>
                        <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            onChange={(e) => handleFormData("position", e.target.value)} 
                            required 
                            value={formData.position}
                        >
                            <option value="">Select Position</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Manager">Manager</option>
                            <option value="Analyst">Analyst</option>
                            <option value="HR Specialist">HR Specialist</option>
                        </select>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-building mr-2"></i>
                            Department <span className="text-red-500">*</span>
                        </label>
                        <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            onChange={(e) => handleFormData("department", e.target.value)} 
                            required 
                            value={formData.department}
                        >
                            <option value="">Select Department</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="Finance">Finance</option>
                            <option value="Operations">Operations</option>
                        </select>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-dollar-sign mr-2"></i>
                            Salary ($) <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="number" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            placeholder="Enter salary" 
                            onChange={(e) => handleFormData("salary", e.target.value)} 
                            required 
                            value={formData.salary}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-envelope mr-2"></i>
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            placeholder="Enter email address" 
                            onChange={(e) => handleFormData("email", e.target.value)} 
                            required 
                            value={formData.email}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-phone mr-2"></i>
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="tel" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            placeholder="Enter phone number" 
                            onChange={(e) => handleFormData("phone", e.target.value)} 
                            required 
                            value={formData.phone}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-user-check mr-2"></i>
                            Status <span className="text-red-500">*</span>
                        </label>
                        <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            onChange={(e) => handleFormData("status", e.target.value)} 
                            required 
                            value={formData.status}
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="On Leave">On Leave</option>
                            <option value="Remote">Remote</option>
                            <option value="Terminated">Terminated</option>
                        </select>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            Start Date <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="date" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            onChange={(e) => handleFormData("startDate", e.target.value)} 
                            required 
                            value={formData.startDate}
                        />
                    </div>
                </div>
                
                <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        Address
                    </label>
                    <textarea 
                        rows={2} 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                        placeholder="Enter employee address"
                        onChange={(e) => handleFormData("address", e.target.value)} 
                        value={formData.address}
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
                >
                    <i className="fas fa-plus-circle mr-2"></i>
                    {editIndex === null ? "Add Employee" : "Update Employee"}
                </button>
            </form>
        </div>
    );
};

export default EmployeeForm;