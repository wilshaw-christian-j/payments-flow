import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

function successPayment(data){
    console.log('Payment Successful');
  };
  
  function errorPayment(data) {
    console.log('Payment Error');
  };
function onToken(token){

  const spreadsheetId = '1HwOLM0gO6CGa9NXcokUXYimgh0xHfEkODSIA-bGtYDQ';
  const data = [["FirstName", "LastName","Email"], ["John", "Doe","john@doe.com"]];

// 4. Send data with a POST request
const baseUrl = "https://pushtogsheet.herokuapp.com";
const query = `valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj`;
const url = new URL(`/proxy/google-sheets/${spreadsheetId}/values/A1:append?${query}`, baseUrl);
  axios.post(url.href, JSON.stringify({ values: data }),  {headers: { 'Pizzly-Auth-Id': 'f01af310-1d96-11eb-994e-491ad237911a',"Access-Control-Allow-Origin": "origin" }})
    .then(successPayment)
    .catch(errorPayment);
};

export default function Stripe(data) {
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