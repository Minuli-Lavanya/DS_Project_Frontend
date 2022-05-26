import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header-Footer/Header';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './404NotFound/404NotFound';
import Account from "./Login/Account";
import AddReservations from './Reservations/AddReservations.js';
import Reservations from './Reservations/Reservations';
import AddHotel from './Hotels/AddHotels';
import AddReservationInfo from './ReservationInfo/AddReservationInfo';
import AddTaxi from './Taxi/AddTaxi';
import ViewHotels from './Hotels/ViewHotels';
import EditHotels from './Hotels/EditHotels';
import HotelDetails from './Hotels/HotelDetails';
import SingleDetailedHotel from './Hotels/SingleDelatailedHotel';
import ReservationInfo from './ReservationInfo/ViewReservation'
import viewTaxi from './Taxi/ViewTaxi';
import ViewResrvationsInfo from './ReservationInfo/ViewReservation';
import EditReservationInfo from './ReservationInfo/EditReservationInfo';
import AllReservationInfo from './ReservationInfo/AllReservationInfo';
import SingleDetailedRoom from './ReservationInfo/DetailedRoom';
import LocationSearchModal from './Map/LandingPage';
import TaxiReservationConfirm from './Taxi/TaxiReservationConfirm';
import AddPayment from './Payment/AddPayment';
import AddEmail from './EmailService/EmailService'
import AddMobile from './MobileService/AddMobile'



import Booking from './Reservations/Booking';
import ViewBooking from './Reservations/ViewBooking';



class FrontEnd extends Component {

    state = {}

    render() {

        return (

            <div className="FrontEnd">

                <Router>

                    <Header/>

                    <Switch>


                        <Route path="/" exact component={Home}/>
                      
                        <Route path="/logout" component={Login}/>
                        <Route path="/myAccount" component={Account}/>


                        {/*  */}
                        
                        <Route path="/AddReservations" component={AddReservations}/>
                        <Route path="/Reservations" component={Reservations}/>
                        <Route path="/addHotels" component={AddHotel}/>
                        <Route path="/HotelDetails" component={HotelDetails}/>
                        <Route path="/viewHotels" component={ViewHotels}/>
                        {/*  */}

                        <Route path="/ViewResrvationsInfo" component={ViewResrvationsInfo}/>
                        <Route path="/EditReservationInfo/:id" component={EditReservationInfo}/>
                        <Route path="/AllReservationInfo" component={AllReservationInfo}/>
                        <Route path="/SingleDetailedRoom/:id" component={SingleDetailedRoom}/>
                        {/*  */}

                        <Route path="/ViewRoom" component={ReservationInfo}/>

                        <Route path="/info" component={AddReservationInfo}/>
                        <Route path="/taxi" component={AddTaxi}/>
                        
                        <Route path="/editHotels/:id" component={EditHotels}/>
                        <Route path="/SingleDetailedHotel/:id" component={SingleDetailedHotel}/>
                        {/*  */}
                        <Route path="/Map" component={LocationSearchModal}/>
                         
                        {/*  */}

                        <Route path="/AddTaxi" component={AddTaxi}/>
                        <Route path="/ViewTaxi" component={viewTaxi}/>
                        <Route path="/TaxiReservationConfirm" component={TaxiReservationConfirm}/>

                        

                        {/*  */}
                        <Route path="/Booking/:id" component={Booking}/>
                        <Route path="/ViewBooking" component={ViewBooking}/>

                        {/*  */}
                       
                        <Route path="/Payment/login" component={Login} />
                        

                        <Route path="/ViewAll/logout" component={Login}/>
                        <Route path="/ViewAll/login" component={Login}/>
			
			<Route path="/payments" component={AddPayment}/>
                        <Route path="/email" component={AddEmail}/>
                        <Route path="/mobile" component={AddMobile}/>
                        



                        <Route component={NotFound}/>

                    </Switch>


                </Router>

            </div>

        );
    }
}

export default FrontEnd;
