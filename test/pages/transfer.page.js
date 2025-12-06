import BasePage from './base.page.js';

class TransferPage extends BasePage{
    constructor(browser){
        super(browser);
    }
    
    amount = '[id="amount"]';
    fromAccount = '[id="fromAccountId"]';
    toAccount = '[id="toAccountId"]';
    pressTButton = '[value="Transfer"]';
    transferComplete = '[id="showResult"] h1.title';

    async fillAmount(amount){
        await this.browser.$(this.amount).clearValue();
        await this.setValue(this.amount, amount);
    }
    async getFirstAccountValue(selector){
        const options = await this.browser.$$(selector + ' option');
        const firstValue = await options[0].getAttribute('value');
        return firstValue;
    }
    async clickTransfer(){
        await this.click(this.pressTButton);
    }
    async getTransferCompleteMsg(){
        console.log('Waiting for transfer complete message...');
        await this.waitForElement(this.transferComplete);
        return await this.getText(this.transferComplete);
    }
}
export default TransferPage;