// import './App.css';
import React, { Component } from 'react'

export class Card_pic extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            number:"#### #### #### ####",
            name:"your name",
            expiry:"MM/YY"
       }
   }
   
render() {
        return (
            <div className="Card_pic">
                <div className="Card_frame">
                    <img className="frame" src="17.jpeg" alt=""front_pic/>
                    <img className="chip" src="chip.png" alt="chip"/>
                
                    <div className="visa">
                        <img className="mastercard" src="mastercard.png" alt="mastercard"/>
                        <img className="discover" src="discover.png" alt="discover"/>
                    </div>
                    </div>
                        <div className="Card_details">
                            <label className="account_number" 
                                type="text">
                                    {this.state.number}
                                    </label>
                            <label className="name_label">Card Holder</label>
                            <label className="account_name" 
                                    type="text">
                                        {this.state.name}
                                    </label>
                            <label className="name_expires">Expires</label>
                            <label className="account_expiry" 
                                type="text">
                                    {this.state.expiry}
                                    </label>
                        </div>
                    <div style={{display:'flex', marginBottom: "10x"}}>
                        <div>
                            <label style={{"color":"black"}}>Card Number</label>
                            <input maxLength="16"
                                    placeholder="Number"    
                                    style={{"border":"2px solid cyan", "borderRadius":"10px", "outline": "none", "padding":"2px"}}
                                    onChange={(e)=>this.setState({number:(e.target.value)})}/>
                        </div>
                        <div>
                            <label style={{"color":"black"}}>card Holder</label>
                            <input maxLength="32"
                                    placeholder="Card Holder Name"
                                    style={{"border":"2px solid cyan", "borderRadius":"10px", "outline": "none", "padding":"2px"}}
                                    onChange={(e)=>this.setState({name:(e.target.value)})}/>
                        </div>
                        <div>
                            <label style={{"color":"black"}}>Expiry</label>
                            <input maxLength="4"
                                    placeholder="MM/YY"
                                    style={{"border":"2px solid cyan", "borderRadius":"10px", "outline": "none", "padding":"2px"}}
                                    onChange={(e)=>this.setState({expiry:(e.target.value)})}/>
                        </div>
                    </div>
            </div>
        )
        }
}

export default Card_pic
