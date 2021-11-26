import React from 'react';
import notfound from '../../images/notfound.jpg'
import SharedHeader from '../Shared/SharedHeader/SharedHeader';
const NotFound = () => {
    return (
        <div >
        <SharedHeader></SharedHeader>
          <img className="w-100" src={notfound} alt="notfound"/>
        </div>
    );
};

export default NotFound;