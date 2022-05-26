import React, {Component} from 'react';
import './taxi.css'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons';


export default class TaxiReservationConfirm extends Component {

    render(){
        
        return (
            
            <div>

                <div id='div1'>
                    <span id='topic1'>
                        Do You Need to Book a <br></br>Taxi Service ?
                    </span>
                </div>

                <div id='div2'>
                            
                    <Link className={"link-4"} to="/taxi"><FontAwesomeIcon
                        icon={faTaxi} className={"mr-2"}/> YES</Link>
                        
                </div>
                
                <div id='sec3'>
                            
                    <Link className={"link-4"} to="/HotelDetails"><FontAwesomeIcon
                        icon={faTaxi} className={"mr-2"}/>&nbsp; NO</Link>
                        
                </div>

            
                <img
                    className="taxi-image"
                    src={require('../../img/IMAGE5.jpg')}
                    alt="First slide"
                />
                
            </div>


        );
    }


    
}

