# Foundr - Payment Gateway System

## The Ask
Build a simple order form that is capable of receiving payments via Credit Card and PayPal.

## Technical Details
#### Technologies Used
This website was created using boilerplate setup from create-react-app
Modules and Libraries Used:
- React V 16.13.1 (using [create-react-app](https://github.com/facebook/create-react-app))
- [PaypalSDK] - paypal integration
- [StripeCheckout] - stripe integration
- [react-hook-form] - hooks framework used for validating fields
- [semantic-ui-react] - react UI framework

#### Installation and Running
1. Install dependencies
`npm install`
2. Run the app
`npm start`

## Design Decisions
**Functional Components** -> The App uses functional components in an attempt to improve the readability and cleanliness of the code.
 - The App has 3 main components:
 - BillingInfo
 - PayPal
 - Stripe
 
 The components are composed into a workflow in APP.js

## Improvements
- The application is not able to write to the googlesheet as required, given more time I would write a service to handle this.
- The application is not hosted, given more time I would have hosted the app.
 
## Testing Notes
Paypal credentials for purchasing throuh paypal

- email:sb-lcxd83616945@personal.example.com
- password:.Ai9@lU#

Stripe card details for credit card purchases.

- card number: 4242 4242 4242 4242
- cvc:123
- date:12/22
