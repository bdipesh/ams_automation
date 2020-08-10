import notice from "../../fixtures/test-data/notice.json"

Given('I want to add notice', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in the notice data', () => {
    cy.get("#email").type(notice.email)
    cy.get("#password").type(notice.password)
    cy.get("#loginButton").click()
    cy.wait(2000)
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.get("#navBar").click({force:true})
    cy.get("#noticeAdd").click({force:true})
    cy.get("#noticeData").type(notice.notice)
})

When('I click on save button', () => {
    cy.get("#post").click()
});

Then('Notice is added successfully', (content) => {
    cy.title().should("eq","Notice | AMS")
});

