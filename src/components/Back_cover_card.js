import React, { Component } from 'react'

export class Back_cover_card extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data:"***"
        }
        this.updateState=this.updateState.bind(this);
    };

    updateState= (e) => {
        this.setState({
            data:(e.target.value)
        })
    };
    
    render(){      
        return ( 
            <div className="Back_cover_card">
                <div className="whole_card">
                    <div className="card_back">
                        <img src="21.jpeg" alt="back_pic"/>
                    </div>
                    <div className="black_row"></div>
                    <div className="input_field">
                        <label className="back_label">CVV</label>
                        <label className="back_input" >{this.state.data}</label>
                    </div>
                    <div className="visa_b">
                        <img className="back_visa" src="visa.png" alt="visa"/>
                    </div>
                </div>
                <div style={{position:"relative", left:"30%", top:"-40px"}}>
                    <label name="cvv" style={{"color":"black"}}>cvv</label>&nbsp;
                    <input 
                        maxLength="3"  
                        type="text" 
                        placeholder="cvv" 
                        onChange={this.updateState} 
                        style={{"border":"2px solid cyan", "borderRadius":"10px", "outline": "none", "padding":"2px"}}
                        /></div>
                 </div>
        )
        }
}

export default Back_cover_card
