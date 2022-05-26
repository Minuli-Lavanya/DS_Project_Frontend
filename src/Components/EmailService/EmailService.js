import React, {useState} from 'react';
import axios from "axios";
import "../Hotels/hotel.css"
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';
import { faLandmark, faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
export default function EmailService() {


    const [email, setemail] = useState("");
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newEmail ={
            email
        }

        

        axios.post("http://localhost:8081/api/email", newEmail).then(()=>{
            alert("Email Added");
            history.push('/mobile');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div>

                
            <div id='sec1'>


                <form onSubmit={sendData} id="form-hotels">

                    <br></br>
                    <span id='heading' style={{'textAlign':'center'}}>Add Email</span><br></br>
                    <span id='heading-email' style={{'textAlign':'center'}}>Add Your Email to confirm the Payment...</span>
                    <br></br><br></br>

                    <div id='sec2'>

                        <div>
                            <label htmlFor="email" class="ftext">Email Address</label>
                            <br></br>
                            <input type="text" class="form-field" id="name" placeholder="sapnaweerasinghe98@gmail.com" required
                            onChange = {(e) => {
                                setemail(e.target.value);
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