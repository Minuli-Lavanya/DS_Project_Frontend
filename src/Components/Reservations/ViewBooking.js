import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from "axios";
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { faArrowAltCircleRight, faArrowCircleLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


export default class ViewBooking extends Component {
 

    constructor(props){
        super(props);
        this.state = {booking: []};

        
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotels/book').then(response=>{
            this.setState({booking: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }



    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8081/hotels/book/${id}`).then((res)=>{
                this.setState({booking: this.state.booking.filter(booking => booking.id !== id)});
                this.props.history.push('/ViewBooking');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/not`);
        }
    }


   
    
    render(){
        console.log("s", this.state.booking);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Reservation Details</h2>
                </div>
                
                
               
                <br/>
                
                    {/* <table className="table table-hover"> */}
                    <Table bordered hover size="sm" style={{width: "1200px", marginLeft: "180px", borderRadius: "12px"}}>
                        
                        <thead>
                            <tr className='table-tr'>
                            
                            <th scope="col">Id</th>
                            <th scope="col">Room ID</th>
                            <th scope="col">Charge</th>
                            <th scope="col">Email</th>
                            <th scope="col">Check In</th>
                            <th scope="col">Check Out</th>
                            <th scope="col">Action</th>
                            
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.booking.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                      <td>{p.id}</td>
                                     <td>{p.roomId}</td>
                                     <td>{p.unitPrice}</td>
                                     <td>{p.email}</td>
                                     <td>{p.checkIn}</td>
                                     <td>{p.checkOut}</td>
                                     
                                        
                                        <td>
                                            
                                            
                                            <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "10px"}} className="btn btn-secondary" onClick={() =>this.onDelete(p.id)}> <FontAwesomeIcon icon={faTrash}  className={"mr-2"}/>Delete</button>
                                            
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>


                    </Table>
                            <br></br><br></br>

                    <Link className='link-5' to="/AllReservationInfo"> <FontAwesomeIcon icon={faArrowCircleLeft}  className={"mr-2"}/> More Rooms</Link>
                    <Link className='link-5' to="/payments">  CheckOut <FontAwesomeIcon icon={faArrowAltCircleRight}  className={"mr-2"}/></Link>
                    
                
            </div>


        );
    }


    
}