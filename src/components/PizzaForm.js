import React, { useState, useEffect } from "react";
import axios from 'axios';
//import * as yup from 'yup';

// Set validation schema later!!!



export default function PizzaForm () {
// Create variables
// const {
//     values,
//     submit,
//     change,
//     disabled,
//     errors
// } = props

// Create State
// Initial State
const [formState, setFormState] = useState({
    ///// TEXT INPUTS /////
    name: "",
    special: "",
    ///// DROPDOWN /////
    size: "",
    ///// RADIO BUTTON /////
    sauce: "", 
    ///// CHECKBOXES /////
    mushroom: false,
    pepperoni: false,
    basil: false
    
});
const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    sauce: "", 
    mushroom: "",
    pepperoni: "",
    basil: "",
    special: ""
});

// Create Variable functions
// onSubmit
const onSubmit = evt => {
    evt.preventDevault();
   
}
// onChange
const onChange = evt => {
    const { name, value, checked, type } = evt.target
    console.log(evt.target);
    const val = type === 'checkbox' ? checked : value
    //change(name, value)
}
console.log('Order name: ', formState);
axios.post('https://reqres.in/api/orders', formState)
     .then(res => {
         console.log('Order Record: ', res.data)
     })
     // setFormState(formState)
     // this breaks it???

// return Form
return (
<>
<div className="pizza">
    <h2>Build Your Own Primo Pizza</h2>
</div>

<form id="pizza-form" className="pizza-form" >
    <div>
        <label> 
            <h3>Your Name</h3>
                <input 
                id="name-input" 
                type="text" 
                name="name" 
                placeholder="Name" 
                value="name" 
                onChange={onChange}/>
        </label>
    </div>

    <div>
        <label htmlFor="size-dropdown"> 
            <h3>Choice of Size</h3> 
                <select 
                id="size-dropdown" 
                name="size" 
                value="" 
                onChange={onChange}>

                <option value="">-- Select an Option--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </label>
           
    </div>
    
    {/* ////////  Radio Buttons for Sauce  //////////*/}
    <div>
        <label htmlFor="sauce"> 
            <h3>Choice of Sauce</h3>
                <label> 
                <input 
                type="radio"
                name="sauce"
                value="Original Red"
                checked={true}
                onChange={onChange}
                />
                Original Red
                </label>
                <br/>

                <label> 
                <input 
                type="radio"
                name="sauce"
                value="Spinach Alfredo"
                checked={true}
                onChange={onChange}
                />
                Spinach Alfredo
                </label>
                <br/>

                <label> 
                <input 
                type="radio"
                name="sauce"
                value="BBQ Sauce"
                checked={true}
                onChange={onChange}
                />
                BBQ Sauce
                </label>
                <br/>

                <label> 
                <input
                type="radio"
                name="sauce"
                value="Garlic Ranch"
                checked={true}
                onChange={onChange}
                />
                Garlic Ranch
                </label>
                <br/>
        </label>
    </div>

{/* ////////  CHECKBOXES for Toppings  //////////*/}
    <div> 
        <label> 
            <h3>Add Toppings</h3> 
                <label>
                    <input type="checkbox" name="Pepperoni" onchange={onChange} value="" />
                    Pepperoni
                </label>
                <br />

                <label>
                    <input type="checkbox" name="Mushroom" onchange={onChange}value="" />
                    Mushroom
                </label>
                <br />

                <label>
                    <input type="checkbox" name="Basil" onchange={onChange} value="" />
                    Basil
                </label>
                <br />

                <label>
                    <input type="checkbox" name="Special" onchange={onChange} value="" />
                    Special
                </label>
                <br />
        </label>
    </div>

    <div>
        <label> 
            <h3>Choice of Substitue</h3>
                <p>
                    <input type="checkbox" name="substitute" onchange={onChange} value="" />
                    Choose up to 1
                </p>
        </label>
    </div>

    <div>
    <label> 
        <h3>Special Instructions</h3> 
        <input 
            type="type" 
            id="special-text" 
            onchange={onChange}
            value="" />
    </label>
    </div>

    <div>
        {/* // Disable this later */}
        <button>Submit Order</button>
    </div>

</form>

</>
    )
}
