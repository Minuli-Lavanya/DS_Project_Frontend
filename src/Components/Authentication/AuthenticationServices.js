class AthenticationServices{
    successfulPayment(cardNo, cvcNo, fullName, nic){
        sessionStorage.setItem('authenticatedCardNo', cardNo);
        sessionStorage.setItem('authenticatedCvcNo', cvcNo);
        sessionStorage.setItem('authenticatedFullName', fullName);
        sessionStorage.setItem('authenticatedNic', nic);
    }

}