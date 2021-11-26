import React from 'react';
import dashboardImg from '../../../images/dashboard.jpg';
const Admin = () => {
    return (
        <div>
            <h2>Welcome Admin</h2>
            <img className="w-50" src={dashboardImg}  alt="dashboard"/>
        </div>
    );
};

export default Admin;