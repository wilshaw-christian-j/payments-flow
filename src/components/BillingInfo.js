import React from 'react';
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function BillingInfo({ setUserState }){
    const { register, errors } = useForm({ mode: "onBlur" });
return(
    <Form>
        <Form.Group inline>
            <Form.Field>
            <div>
                <input name="firstName" type='text' placeholder='First name' style={{ height: '35px',width:'200px', margin: '0px 0px 15px 0px'}} ref={register({ required: true })} onChange={(e) => setUserState(prevState=>({...prevState,fName:e.target.value ? e.target.value :""}))}/>
                {errors.firstName && <p>This is required</p>}
            </div>
            </Form.Field>
            <Form.Field>
                <div>
                    <input name="lastName" type='text' placeholder='Last Name' style={{ height: '35px',width:'200px',margin: '0px 0px 15px 0px'}} ref={register({ required: true })} onChange={(e) => setUserState(prevState=>({...prevState,lName:e.target.value ? e.target.value :"" }))} />
                    {errors.lastName && <p>This is required</p>}
                </div>
            </Form.Field>
            <Form.Field>
                <div>
                    <input name="email" type='email' placeholder='Email' required style={{ height: '35px',width:'200px',margin: '0px 0px 15px 0px'}}  ref={register({ required: true })} onChange={(e) => setUserState(prevState=>({...prevState,email:e.target.value ? e.target.value :""}))}/>
                    {errors.email && <p>This is required</p>}
                </div>
            </Form.Field>
        </Form.Group>
    </Form>
);
}
