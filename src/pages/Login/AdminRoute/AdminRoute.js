import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    
    const {user,isLoading,admin} = useAuth();

    if(!admin || isLoading){
        return <Spinner animation="border" variant="danger"/>
    }
    return (
      
        <Route
            {...rest}
            render = {({location}) => user.email && admin ? children: <Redirect
                to={{
                    pathname: "/login",
                    state:{from:location}
                }}
            ></Redirect>
            }
            >
        </Route>
    );
};

export default AdminRoute;