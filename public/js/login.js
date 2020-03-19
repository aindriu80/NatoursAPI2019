/* eslint-disable */
<<<<<<< HEAD
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
=======
 
const login = async (email, password) => {
>>>>>>> 00f0e7d54730bf8ec199ce3e0842f2ab2a49d4cb
    try {
    const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/users/login',
        data: {
            email,
            password
        }
    });

    if(res.data.status === 'success'){
<<<<<<< HEAD
        showAlert('success','Logged in successfully:)');
=======
        alert('Logged in successfully:)');
>>>>>>> 00f0e7d54730bf8ec199ce3e0842f2ab2a49d4cb
        window.setTimeout(()=>{
            location.assign('/');
        }, 1500);
    }
    } catch(err) {
<<<<<<< HEAD
        showAlert('error', err.response.data.message);
=======
        alert(err.response.data.message);
>>>>>>> 00f0e7d54730bf8ec199ce3e0842f2ab2a49d4cb
    }
};
