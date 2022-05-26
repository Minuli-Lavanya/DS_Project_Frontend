import axios from 'axios'

class AthenticationPaymentService{

    getPayment(cardNo){
        return axios.get(`http://localhost:8080/payment/payments/${cardNo}`);
    }

}

export default new AthenticationPaymentService();