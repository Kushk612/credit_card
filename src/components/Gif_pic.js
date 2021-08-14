import React,{useState} from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "react-credit-cards";

function Gif_pic() {

    const [number,setNumber]=useState('');
    const [name,setName]=useState('');
    const [expiry,setExpiry]=useState('');
    const [month,setMonth]=useState('');
    const [cvc,setCvc]=useState('');
    const [focus,setFocus]=useState('');

    const handleChange = (e) => {
    setMonth(e.target.value);
    setExpiry(e.target.value);
    };

    const handleExpiry = (e) => {
    setExpiry(month.concat(e.target.value));
    };

    return (
        <div>
            <div className="cards">
                <Cards
                name={name}
                number={number}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
                />
            </div>
            <form>
            <div className="row">
                <div className="row_content_number">
                <label>Card Number</label><br/>
                <input
                type="tel"
                className=""
                placeholder="Number"
                value={number}
                onChange={e=>setNumber(e.target.value)}
                onFocus={e=>setFocus(e.target.number)}
                />
                </div>
            </div>
            <div className="row">
                <div className="row_content_name">
                <label>Card Holder</label>
                <input
                type="tel"
                placeholder="Name"
                value={name}
                onChange={e=>setName(e.target.value)}
                onFocus={e=>setFocus(e.target.name)}
                />
                </div>
            </div>
            <div className="row">
                <div className="row_content_expiry">
                <label for="month">Expiration Date</label>
                </div>
                <div className="row_content_cvv">
                    <label for="cvv">CVV</label>
                </div>
            </div>
            <div className="set_three">
            <div className="row">
                <div className="expiry">
                <select 
                name="expiry"
                onChange={handleChange}
                >
                    <option value=" ">Month</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Setp</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
                </div>
            </div>
            &nbsp;&nbsp;
            <div className="expiry">
                <select
                name="expiry"
                onChange={handleExpiry}
                >
                <option value=" ">Year</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
                </select>
            </div>
                <div className="cvc">
                    <div>
                        <input
                        type="tel"
                        maxLength="3"
                        name="cvc"
                        placeholder="CVV"
                        value={cvc}
                        onChange={e=>setCvc(e.target.value)}
                        onFocus={(e)=>setFocus(e.target.name)}
                        />
                    </div>
                </div>
            </div>
                <input
                className="btn btn-primary form-control"
                type="submit"
                value="Submit"/>
            </form>
    
        </div>
    )
}

export default Gif_pic
