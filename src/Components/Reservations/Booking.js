import React, { Component } from 'react';
import axios from 'axios';
import './Reservation.css'


export default class Booking extends Component {

    constructor(props) {
        super(props);


        this.state = {
            
            roomId:'',
            unitPrice:'', 
            email:'',
            checkIn:'',
            checkOut:'',
            

           
        }


        
        this.onChangeunitPrice = this.onChangeunitPrice.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangecheckIn = this.onChangecheckIn.bind(this);
        this.onChangecheckOut = this.onChangecheckOut.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);



    }

    componentDidMount(){
        //console.log(this.props.match.params.id);
        axios.get('http://localhost:8081/hotel/room/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                roomId:response.data.id,
                    
                    
                    unitPrice:response.data.unitPrice,
                   
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    
    
    onChangeunitPrice(e){
        this.setState({unitPrice:e.target.value});
    }
    onChangeemail(e){
        this.setState({email:e.target.value});
    }
    onChangecheckIn(e){
        this.setState({checkIn:e.target.value});
    }
    onChangecheckOut(e){
        this.setState({checkOut:e.target.value});
    }
   


    onSubmit(e){
        e.preventDefault();
        const obj = {

            roomId:this.state.roomId,
            unitPrice: this.state.unitPrice,
            email: this.state.email,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            
        };

        axios.post("http://localhost:8081/hotels/book", obj)
        .then(res =>console.log(res.data),
        alert("Add Booking Successfully"));

        this.props.history.push('/ViewBooking');
    }





    render() {
        return(
            <div className="form-hotels">

            <br></br>
            <br></br>
            
            
            <div id='sec1'>
            

                <form onSubmit={this.onSubmit} id="form-rooms">

                        <br></br>
                        <span id='heading' style={{'textAlign':'center'}}>Booking  Details</span>
                        <br></br><br></br>

                    <div id='sec2'>

                        <div>
                            <label htmlFor="from" class="ftext">Room Id </label><br></br>
                            <input type="number" class="form-field" id="roomId" readOnly 
                            value={this.state.roomId}
                            
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="from" class="ftext">Charge </label><br></br>
                            <input type="number" class="form-field" id="unitPrice" readOnly 
                            value={this.state.unitPrice}
                            
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="from" class="ftext">Email</label><br></br>
                            <input type="text" class="form-field" id="email"  placeholder="" 
                            value={this.state.email}
                            onChange={this.onChangeemail}
                            />
                        </div>
                        <div>
                            <label htmlFor="from" class="ftext">Check in </label><br></br>
                            <input type="date" class="form-field" id="checkIn"  placeholder="" 
                            value={this.state.checkIn}
                            onChange={this.onChangecheckIn}
                            />
                        </div>
                        <div>
                            <label htmlFor="from" class="ftext">Check out </label><br></br>
                            <input type="date" class="form-field" id="checkOut"  placeholder="" 
                            value={this.state.checkOut}
                            onChange={this.onChangecheckOut}
                            />
                        </div>

                    </div>
                    <br></br>
                    <button type="submit" className="btn-3" >Book Now</button>
                    <br></br><br></br>
                </form><br></br>

            </div>




            </div>
            
        )
    }
}