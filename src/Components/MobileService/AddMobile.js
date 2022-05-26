import React, {useState} from 'react';
import axios from "axios";
import "../Hotels/hotel.css"
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';
import { faLandmark, faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
export default function AddMobile() {


    const [mobile, setmobile] = useState("");
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newMobile ={
            mobile
        }

        

        axios.post("http://localhost:8080/hotels/addmobile", newMobile).then(()=>{
            alert("Mobile Number Added");
            history.push('/HotelDetails');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div>

                
            <div id='sec1'>


                <form onSubmit={sendData} id="form-hotels">

                    <br></br>
                    <span id='heading-mobile' style={{'textAlign':'center'}}>Add Mobile Number</span><br></br>
                    <br></br>
                    <span id='heading-mobile-2' style={{'textAlign':'center'}}>Add your Mobile Number to confirm the Payment...</span>
                    <br></br><br></br>

                    <div id='sec2'>

                        <div>
                            <label htmlFor="mobile" class="ftext">Mobile Number</label>
                            <br></br>
                            <input type="text" class="form-field" id="mobile" placeholder="0704589634" required
                            onChange = {(e) => {
                                setmobile(e.target.value);
                            }}   
                            />
                        </div>
                    </div>

                        <br></br>


                    <button type="submit" id = "submit-button">SUBMIT</button>
                </form>



            </div>
            
            
        </div>
    )
}