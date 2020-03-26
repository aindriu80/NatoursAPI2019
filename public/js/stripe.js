/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
    try{
    // 1) Get checkout session from API 
    const stripe = Stripe('pk_test_pgO0Tvfx2mIaXjgPhxPs6HqY00NuOz4OTJ');
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    });

    }catch(err){
        console.log(err);
        showAlert('error',err);
    }
}
