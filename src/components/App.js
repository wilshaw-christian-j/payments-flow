import React from 'react';
import PayPal from './PayPal'
import Stripe from './Stripe'
import BillingInfo from './BillingInfo'
import { Form, Radio, Checkbox } from "semantic-ui-react";

export default function App(){
    const [checkOutType, setCheckOutType] = React.useState("PayPal");
    const [totalPrice, setProductPrice] = React.useState(0.00);
    const [userState, setUserState] = React.useState({ fName: "", lName: "",email:"" })
    return (
      <div className="App">
        <header className="App-header">
          {
            <div>
            <h1>Shopping Cart</h1>
            <hr noshade />
            <h2>Billing Info:</h2>
            <BillingInfo setUserState={setUserState}/>
            <hr noshade />
            <h2>Your Order:</h2>
            <Form.Group inline>
            <Checkbox  label={"Uber product $5.00"} value={5.00}  onChange={(e,data) => {
               data.checked === true ? setProductPrice(totalPrice+data.value): setProductPrice(totalPrice-data.value);
            }}/>
            <Checkbox  label={"Awesome product $10.00"} value={10.00}  onChange={(e,data) => {
               data.checked === true ? setProductPrice(totalPrice+data.value): setProductPrice(totalPrice-data.value);
            }}/>
            </Form.Group>
            <hr noshade />
            <Form.Group inline>
                <Radio label="PayPal" checked={checkOutType === "PayPal"} value="PayPal" onClick={() => setCheckOutType("PayPal")} />
                <Radio label="CreditCard" checked={checkOutType === "CreditCard"} value="CreditCard" onClick={() => setCheckOutType("CreditCard")} />
             </Form.Group>
              <div className="payment-div">
              <h4>Total Amount in AUD :  ${totalPrice} 😃</h4>
              {checkOutType === "PayPal" && totalPrice > 0 ? <PayPal amount={Number(totalPrice)} user={userState}/> : null}
              {checkOutType === "CreditCard" && totalPrice > 0 ? <Stripe amount={Number(totalPrice)} user={userState}/> : null}
              </div>
            </div>
          }
        </header>
      </div>
    );
  }