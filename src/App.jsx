import { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import NotificationPanel from './components/NotificationPanel';

const App = () => {
    const [formData, setFormData] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState({
        name: '',
        position: '',
        department: '',
        salary: '',
        email: '',
        phone: '',
        status: '',
        startDate: '',
        address: ''
    });
    const [editIndex, setEditIndex] = useState(null);
    const [notifications, setNotifications] = useState([]); // This should be an empty array, not undefined

    const handleFormData = (field, value) => {
        setCurrentEmployee({
            ...currentEmployee,
            [field]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (editIndex === null) {
            // Add new employee
            setFormData([...formData, currentEmployee]);
            
            // Add notification - make sure we're passing an array
            setNotifications([
                {
                    type: 'new',
                    message: `New employee ${currentEmployee.name} added`,
                    time: 'Just now'
                },
                ...(notifications || []) // Fallback to empty array if notifications is undefined
            ]);
        } else {
            // Update existing employee
            const updatedData = [...formData];
            updatedData[editIndex] = currentEmployee;
            setFormData(updatedData);
            
            // Add notification
            setNotifications([
                {
                    type: 'update',
                    message: `Employee ${currentEmployee.name} updated`,
                    time: 'Just now'
                },
                ...(notifications || [])
            ]);
            
            setEditIndex(null);
        }
        
        // Reset form
        setCurrentEmployee({
            name: '',
            position: '',
            department: '',
            salary: '',
            email: '',
            phone: '',
            status: '',
            startDate: '',
            address: ''
        });
    };

    const handleEdit = (index) => {
        setCurrentEmployee(formData[index]);
        setEditIndex(index);
        
        // Scroll to form
        document.getElementById('employee-form').scrollIntoView({ behavior: 'smooth' });
    };

    const handleDelete = (index) => {
        const employeeName = formData[index].name;
        const updatedData = formData.filter((_, i) => i !== index);
        setFormData(updatedData);
        
        // Add notification
        setNotifications([
            {
                type: 'delete',
                message: `Employee ${employeeName} removed`,
                time: 'Just now'
            },
            ...(notifications || [])
        ]);
        
        if (editIndex === index) {
            setEditIndex(null);
            setCurrentEmployee({
                name: '',
                position: '',
                department: '',
                salary: '',
                email: '',
                phone: '',
                status: '',
                startDate: '',
                address: ''
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-blue-600">
                        <i className="fas fa-users mr-3"></i>
                        Employee Management System
                    </h1>
                    <p className="text-gray-600 mt-2">Efficiently manage your workforce with our professional dashboard</p>
                </div>
            </header>
            
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-3/4">
                        <div id="employee-form">
                            <EmployeeForm 
                                editIndex={editIndex}
                                formData={currentEmployee}
                                handleFormData={handleFormData}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                        
                        <EmployeeTable 
                            handleEdit={handleEdit}
                            formData={formData}
                            handleDelete={handleDelete}
                        />
                    </div>
                    
                    {/* Make sure notifications is always passed as an array */}
                    <NotificationPanel notifications={notifications || []} />
                </div>
            </main>
        </div>
    );
};

export default App;