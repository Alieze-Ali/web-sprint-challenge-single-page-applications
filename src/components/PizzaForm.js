import React, { useState, useEffect } from "react";
import axios from 'axios';
//import * as yup from 'yup';

// Set validation schema later!!!

// Create variables

export default function PizzaForm () {


// Create State
const [formState, setFormState] = useState({
    name: "",
    size: "",
    mushroom: false,
    pepperoni: false,
    basil: false,
    special: ""
});
const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    mushroom: "",
    pepperoni: "",
    basil: "",
    special: ""
});
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
            <input id="name-input" type="text" name="name" placeholder="Name" value="name" onChange="onChange"/>
        </label>
    </div>

    <div>
        <label htmlFor="size"> 
            <h3>Choice of Size</h3> 
            <select id="size-dropdown" name="size" value="" onchange="">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </label>
           
    </div>

    <div>
        <label htmlFor="sauce"> 
            <h3>Choice of Sauce</h3>
                <label> 
                <input type="radio"
                value="Original Red"
                checked=""
                onChange=""
                />
                Original Red
                </label>
                <br/>

                <label> 
                <input type="radio"
                value="Original Red"
                checked=""
                onChange=""
                />
                Spinach Alfredo
                </label>
                <br/>

                <label> 
                <input type="radio"
                value="Original Red"
                checked=""
                onChange=""
                />
                BBQ Sauce
                </label>
                <br/>

                <label> 
                <input type="radio"
                value="Original Red"
                checked=""
                onChange=""
                />
                Garlic Ranch
                </label>
                <br/>
        </label>
    </div>

    <div> 
        <label> 
            <h3>Add Toppings</h3> 
                <label>
                    <input type="checkbox" name="toppings" onchange="" value="" />
                    Pepperoni
                </label>
                <br />

                <label>
                    <input type="checkbox" name="toppings" onchange="" value="" />
                    Mushroom
                </label>
                <br />

                <label>
                    <input type="checkbox" name="toppings" onchange="" value="" />
                    Basil
                </label>
                <br />

                <label>
                    <input type="checkbox" name="toppings" onchange="" value="" />
                    Special
                </label>
                <br />
        </label>
    </div>

    <div>
        <label> 
            <h3>Choice of Substitue</h3>
                <p>
                    <input type="checkbox" name="substitute" onchange="" value="" />
                    Choose up to 1
                </p>
        </label>
    </div>

    <div>
    <label> 
        <h3>Special Instructions</h3> 
        <input type="type" id="special-text" onchange="" value="" />
    </label>
    </div>

</form>

</>
    )
}