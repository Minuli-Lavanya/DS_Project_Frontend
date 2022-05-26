import React, {useState} from 'react';
import axios from "axios";
import '../Hotels/hotel.css';
import {useHistory} from 'react-router-dom';


export default function AddTaxi() {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [pcount, setpcount] = useState("");
    const [pick, setpick] = useState("");
    const [drop, setdrop] = useState("");

    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newTaxi ={

            name,
            email,
            vehicleType,
            pcount,
            pick, 
            drop

        }

        

        axios.post("http://localhost:8081/taxi", newTaxi).then(()=>{
            alert("Taxi Added");
            history.push('/HotelDetails');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className="form_name">

            

            <div id='sec1'>
                <form onSubmit={sendData} id="form-hotels">

                    <br></br>
                    <span id='heading' style={{'textAlign':'center'}}>Add Taxi Details</span>
                    <br></br><br></br>


                    <div id='sec2'>
                        <div>
                        <label htmlFor="name" class="ftext">Name </label><br></br>
                        <input type="text" class="form-field" id="name" placeholder="" required
                        onChange = {(e) => {
                            setname(e.target.value);
                        }}   
                        />
                        </div>

                        <div>
                        <label htmlFor="busnumber" class="ftext">Email </label><br></br>
                        <input type="text" class="form-field"  id="email" placeholder="" required
                        onChange = {(e) => {
                            setemail(e.target.value);
                        }}  
                        />
                        </div>

                        <div>
                        <label htmlFor="from" class="ftext">Tel </label><br></br>
                        <input type="number" class="form-field" id="pcount"  placeholder="" required
                        onChange = {(e) => {
                            setpcount(e.target.value);
                        }}
                        />
                        </div>

                        <div>
                        <label htmlFor="to" class="ftext">Vehicle Type </label><br></br>
                        <input type="text" class="form-field"  id="vehicleType" placeholder="" required
                        onChange = {(e) => {
                            setvehicleType(e.target.value);
                        }}
                        />
                        </div>

                        <div>
                        <label htmlFor="to" class="ftext">Pick </label><br></br>
                        <input type="text" class="form-field" id="pick" placeholder="" required
                        onChange = {(e) => {
                            setpick(e.target.value);
                        }}
                        />
                        </div>

                        <div>
                        <label htmlFor="to" class="ftext">Drop  </label><br></br>
                        <input type="text" class="form-field" id="drop" placeholder="" required
                        onChange = {(e) => {
                            setdrop(e.target.value);
                        }}
                        />
                        </div>

                    </div>



                    <button type="submit" id = "submit-button">Taxi Service</button>
                </form>

            </div>
           
            
        </div>
    )
}