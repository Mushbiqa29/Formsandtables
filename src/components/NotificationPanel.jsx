const NotificationPanel = ({ notifications }) => {
    return (
        <div className="w-full lg:w-1/4 mt-6 lg:mt-0 lg:pl-5">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 h-full">
                <h2 className="text-xl font-bold mb-5 text-blue-600 border-b pb-3">
                    <i className="fas fa-bell mr-2"></i>
                    Activity Feed
                </h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {notifications.length === 0 ? (
                        <div className="text-center py-10">
                            <i className="fas fa-bell-slash text-3xl text-gray-300 mb-3"></i>
                            <p className="text-gray-500">No notifications yet</p>
                        </div>
                    ) : (
                        notifications.map((notification, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 pt-1">
                                        <i className={`fas ${
                                            notification.type === 'new' ? 'fa-user-plus text-green-500' :
                                            notification.type === 'update' ? 'fa-edit text-blue-500' :
                                            'fa-trash text-red-500'
                                        }`}></i>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            {notification.message}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            <i className="far fa-clock mr-1"></i>
                                            {notification.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationPanel;