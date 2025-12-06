import LoginPage from "../pages/login.page.js";
import RegisterPage from "../pages/register.page.js";
import TransferPage from "../pages/transfer.page.js";

let registerPage;
let loginPage;
let transferPage;
describe("Transfer Flow", () => {

    beforeEach(async () => {
        await browser.url('/');
        loginPage = new LoginPage(browser);
        registerPage = new RegisterPage(browser);
        transferPage = new TransferPage(browser);
    })
    afterEach(async () => {
        await browser.url('/');
    })
    it('Should register a new user', async () => {
        await registerPage.clickRegisterForm();
        await registerPage.fillFirstName("John");
        await registerPage.fillLastName("Doe");
        await registerPage.fillAddress("123 Main St");
        await registerPage.fillCity("New York");
        await registerPage.fillState("NY");
        await registerPage.fillZipCode("10001");
        await registerPage.fillPhoneNumber("5551234567");
        await registerPage.fillSSN("123456789");
        await registerPage.fillUserName("johndoe");
        await registerPage.fillPassword("Pasword123");
        await registerPage.fillRepeatPassword("Pasword123");
        await registerPage.clickSubmit();
    })

    it('Should login with registered user', async () => {
        await loginPage.fillUsername("johndoe");
        await loginPage.fillPassword("Pasword123");
        await loginPage.clickLogin();
        const msg = await loginPage.getWelcomeMsg();
        expect(msg).toContain('Welcome');
    })

    it('Should transfer funds', async () => {
        await loginPage.clickTransferButton();
        await transferPage.fillAmount("20000");
        //await transferPage.selectByValue(transferPage.fromAccount, "65847");
        //await transferPage.selectByValue(transferPage.toAccount, "65847");
        await transferPage.clickTransfer();
        //const msg = await transferPage.getTransferCompleteMsg();
        //expect(msg).toContain("complete");
    })
})