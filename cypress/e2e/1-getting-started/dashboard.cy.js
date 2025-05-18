import dashboard, { directory } from "../3-pageobejct/dashboard.cy.js";
import login from "../3-pageobejct/loginpage.js";

describe('pom', () =>{
    it('dasboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
        login.setUserName("admin");
        login.setPassword("admin123");
        login.clickSubmit();

        dashboard.directory();
        dashboard.employee("daryono");
        cy.wait(2000)
        dashboard.autocomplete();
        dashboard.submit();
        // dashboard.jobtitle("");
    });
});