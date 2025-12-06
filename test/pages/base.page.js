class BasePage{
    constructor(browser){
        this.browser = browser;
    }
    async click(selector){
        await this.browser.$(selector).click();
    }
    async setValue(selector, value){
        await this.browser.$(selector).setValue(value);
    }
    async getText(selector){
        return await this.browser.$(selector).getText();
    }  
    async isDisplayed(selector){
        return await this.browser.$(selector).isDisplayed();
    }
    async waitForElement(selector){
        return await this.browser.$(selector).waitForDisplayed();
    }
    async selectByVisibleText(selector, text){
        await this.browser.$(selector).selectByVisibleText(text);
    }
    
    async selectByValue(selector, value){
        await this.browser.$(selector).selectByAttribute('value', value);
    }
}

export default BasePage;