import React, { useState } from "react";

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

// return Form
return (
<>
<div className="pizza">
    <h2>Build Your Own Primo Pizza</h2>
</div>

<form id="pizza-form" className="pizza-form" >
    <div>
        <label>Name
            <input id="name-input" type="text" name="name" />
        </label>
    </div>

    <div>
        <label> Choice of Size </label>
            <select name="size" value="" onchange="">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
    </div>

    <div>
        <label> Choice of Sauce </label>
    </div>

    <div> 
        <label> Add Toppings </label>
    </div>

    <div>
        <label> Choice of Substitue </label>
    </div>

    <div>
    <label> Special Instructions </label>
    </div>

</form>

</>
    )
}