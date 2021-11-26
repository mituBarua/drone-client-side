import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://murmuring-ridge-12828.herokuapp.com/makeAdmin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="my-4">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                id="outlined-basic"
                    sx={{ width: '30%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                    <br/>
                <Button sx={{margin: '20px'}} type="submit" variant="contained">Make Admin</Button>
            </form>
           
               {
                   success && <Alert severity="success">Made Admin successfully!</Alert> 
               } 
                  
                
        </div>
    );
};

export default MakeAdmin;