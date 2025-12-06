import BasePage from './base.page.js';

class LoginPage extends BasePage{
    constructor(browser){
        super(browser);
    }
    username = '[name="username"]';
    password = '[name="password"]';
    loginButton = '[value="Log In"]';
    welcomeMsg = '[class="smallText"]';
    transferButton = '[href="transfer.htm"]';

    async fillUsername(username){
        await this.setValue(this.username, username);
    }
    async fillPassword(password){
        await this.setValue(this.password, password);
    }
    async clickLogin(){
        await this.click(this.loginButton);
    }
    async getWelcomeMsg(){
        return await this.getText(this.welcomeMsg);
    }
    async clickTransferButton(){
        await this.click(this.transferButton);
    }
}
export default LoginPage;