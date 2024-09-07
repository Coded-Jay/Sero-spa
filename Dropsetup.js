import React, {useState} from "react";
import './DropDown.css';

const Dropdown=()=>{
    const[selectedValue, setSelectedValue] = useState("");
    const handleChange=(event)=>{
        setSelectedValue(event.target.value);
    };

return (
    <div>
    <label htmlFor="dropdown"></label>
<select id="dropdown" value={selectedValue} onChange={handleChange}>
    <option value="#">Our Services</option>
    <option value="our Services">Mobile Massage Services</option>
    <option value="our Insights">Aromatheraphy Massage</option>
    <option value="www.google.com">Deep Tissue Massage</option>
    <option value="our Services">Manicure & Pedicure</option>
    <option value="our Services">Relaxation Massage</option> 
    <option value="our Services">Hot Stone Massage</option> 
    <option value="our Services">Loml Loml Massage</option>
    <option value="our Services">Prostate Massage</option>
    <option value="www.google.com">Back Massage</option>
    <option value="our Services">Foot Massage</option>
    <option value="our Services">Neck Massage</option>
</select>
</div>
);
};

export default Dropdown;