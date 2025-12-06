import BasePage from './base.page.js';

class RegisterPage extends BasePage{
    constructor(browser){
        super(browser);
    }
    registerForm = '[href="register.htm"]';
    firstName = '[id="customer.firstName"]';
    lastName = '[id="customer.lastName"]';
    address = '[id="customer.address.street"]';
    city = '[id="customer.address.city"]';
    state = '[id="customer.address.state"]';
    zipCode = '[id="customer.address.zipCode"]';
    phoneNumber = '[id="customer.phoneNumber"]';
    ssn = '[id="customer.ssn"]';
    userName = '[id="customer.username"]';
    password = '[id="customer.password"]';
    repeatPassword = '[id="repeatedPassword"]';
    submitButton = '[value="Register"]';
    
    async clickRegisterForm() {
        await this.click(this.registerForm);
    } 
    async fillFirstName(fName){
        await this.setValue(this.firstName, fName);
    }
    async fillLastName(lName){
        await this.setValue(this.lastName, lName);
    }
    async fillAddress(address){
        await this.setValue(this.address, address);
    }
    async fillCity(city){
        await this.setValue(this.city, city);
    }
    async fillState(state){
        await this.setValue(this.state, state);
    }
    async fillZipCode(zipCode){
        await this.setValue(this.zipCode, zipCode);
    }
    async fillPhoneNumber(phoneNumber){
        await this.setValue(this.phoneNumber, phoneNumber);
    }
    async fillSSN(ssn){
        await this.setValue(this.ssn, ssn);
    }
    async fillUserName(userName){
        await this.setValue(this.userName, userName);
    }
    async fillPassword(password){
        await this.setValue(this.password, password);
    }
    async fillRepeatPassword(repeatPassword){
        await this.setValue(this.repeatPassword, repeatPassword);
    }
    async clickSubmit(){
        await this.click(this.submitButton);
    }
}export default RegisterPage;