import React, { Component } from 'react';
import {Form, Button, Container, Card} from 'react-bootstrap';
import '../Login/Login.css'
import AuthenticationServices from '../Authentication/AuthenticationServices';
import AuthenticationPaymentService from '../Authentication/AuthenticationPaymentService';
import { withRouter } from 'react-router-dom';
import '../Hotels/hotel.css'

class AddPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardNo: '',
            cvcNo: '',
            fullName:'',
            expDate:'',
            amount:'',
            hasPaymentFailed: false,
            showSuccessMsg: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.paymentClicked = this.paymentClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {[event.target.name]:event.target.value}
        )
    }

    paymentClicked() {
        AuthenticationPaymentService.getPayment(this.state.cardNo)
            .then(
                response => {
                   if(response.data != null){
                        if((this.state.cvcNo == response.data.cvcNo) && (this.state.fullName === response.data.fullName)){
                            //AuthenticationServices.successfulPayment(response.data.cardNo, response.data.cvcNo, response.data.fullName, response.data.nic)
                            alert("Payment is successful...")
                            this.props.history.push("/email")
                            this.setState({showSuccessMsg: true})
                            this.setState({hasPaymentFailed: false})
                        }
                        else{
                            alert("Invalid Payment details")
                            this.setState({showSuccessMsg: false})
                            this.setState({hasPaymentFailed: true})
                        }
                    }
                    else{
                        alert("Invalid Card Number");
                        this.setState({showSuccessMsg: false})
                        this.setState({hasPaymentFailed: true})
                    }
                }
            )
    }

    
    render() {

        return (

            <Container>
                <Card style={{border:'none'}}>
                    <Card.Body>
                        <div id='sec4'>
                            <form id="form-hotels">
                            <br></br>
                                <span id='heading-payment' style={{'textAlign':'center'}}>Add Payment Details</span>
                                <br></br><br></br>
                                <div id='sec2'>
                                    <div>
                                        <label htmlFor="userId" className="grey-text">
                                            Full Name
                                        </label><br></br>
                                        <input type="text" name="fullName" class="form-field" placeholder={"ex: John Mayer"}
                                            value={this.state.fullName} required={true} onChange={this.handleChange}/>
                                    </div>

                                    <div>
                                        <label htmlFor="nic" className="grey-text">
                                        Expiry Date
                                        </label><br></br>
                                        <input type="text" name="expDate" class="form-field" placeholder={"ex: 2022/08/20"}
                                            value={this.state.expDate} required={true} onChange={this.handleChange} />
                                    
                                    </div>
                                    <div>
                                        <label htmlFor="cardNo" className="grey-text">
                                        Card Number
                                        </label><br></br>
                                        <input type="number" name="cardNo" class="form-field" placeholder={"ex: 1234"}
                                            value={this.state.cardNo} required={true} onChange={this.handleChange} />
                                    
                                    </div>
                                    <div>
                                        <label htmlFor="cvcNo" className="grey-text">
                                        CVC No
                                        </label><br></br>
                                        <input type="number" name="cvcNo" class="form-field" placeholder={"ex: 1111"}
                                            value={this.state.cvcNo} required={true} onChange={this.handleChange} />
                                    
                                    </div>
                                    <div>
                                        <label htmlFor="amount" className="grey-text">
                                        Amount
                                        </label><br></br>
                                        <input type="number" name="amount" class="form-field" placeholder={"ex: 10000"}
                                            value={this.state.amount} required={true} onChange={this.handleChange} />
                                    
                                    </div>

                                    <div>
                                        <Button variant={"dark"} name={"signup"} block onClick={this.paymentClicked}
                                                 className="btn-4" >SUBMIT</Button>
                                    </div>
                                </div>
                                <br></br><br></br>
                            </form>
                            <br></br><br></br>
                        </div>
                    </Card.Body>
                </Card>

            </Container>

         );
    }
}
 
export default withRouter (AddPayment);