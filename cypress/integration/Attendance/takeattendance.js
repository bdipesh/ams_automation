import attendance from "../../fixtures/test-data/attendance.json"

Given('I want to take attendance', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select the required batch and course and present the student', () => {
    cy.get("#email").type(attendance.email)
    cy.get("#password").type(attendance.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Take Attendance').click({force: true})
    cy.get("#batchSelect").click({force:true})
    cy.contains('Sept').click()
    cy.get("#courseSelect").click({force:true})
    cy.contains('asd').click()
    cy.get("#present").click({force:true})
})

When('I click on save button', () => {
    cy.get("#save").click()
});

Then('Attendance is saved successfully', (content) => {
    cy.title().should("eq","Attendance | AMS")
});

