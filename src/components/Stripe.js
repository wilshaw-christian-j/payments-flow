import React from 'react';
import Google,{sendDataToGoogle} from './Google'
import StripeCheckout from 'react-stripe-checkout';

function writeData(data){
  Google();
  const dataToSend = { FirstName:data.fName, LastName:data.lName, Email:data.email};
  sendDataToGoogle(dataToSend);
};

function onToken(token){
 
};

export default function Stripe({data,user}) {
  writeData(user);
  const amnt = Number(data.amount*100); //do this to get the correct value;
    return (
        <StripeCheckout
        stripeKey="pk_test_51HiyibKahUkE99Fs7QDGUUtujWetKGw8ksW3HMjzz6dWGe91LSfYRl0rDyGNruAVD65VRpEBcrBLPSWGTCpxhXMb00yOMU6eh3"
        token={onToken}
        allowRememberMe={false}
        amount={amnt}
        billingAddress={false}
        description = {"Card Payment"}
        label="Pay with 💳"
        locale="auto"
        panelLabel="Total Payment"
        currency="AUD"
         zipCode
        />
    )
}