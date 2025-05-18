import login from "../3-pageobejct/loginpage.js";

describe('pom', () =>{
    it('login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin123') 
        cy.get('.oxd-button').click()
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text','Dashboard');
    });


     it.only('LoginTest', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     const ln=new login();
        
       ln.setUserName("admin")
       ln.setPassword("admin123")
       ln.clickSubmit();
       ln.verifyLogin();
    });
});

//     export default PageObject

// //     it.block('login with invalid credential', () => {
// //         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// //         cy.get('input[name="username"]').type('admin')
// //         cy.get('input[name="password"]').type('admin12') 
// //         cy.get('.oxd-button').click()
// //     });

// //     it.block('login with username credential', () => {
// //         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// //         cy.get('input[name="username"]').type('adminabcd')
// //         cy.get('input[name="password"]').type('admin123') 
// //         cy.get('.oxd-button').click()
// //     });

// //     it.block('login with password credential', () => {
// //         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// //         cy.get('input[name="username"]').type('admin')
// //         cy.get('input[name="password"]').type('admin123abcd') 
// //         cy.get('.oxd-button').click()
// //     });
// });