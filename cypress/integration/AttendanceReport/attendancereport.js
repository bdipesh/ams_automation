import attendance from "../../fixtures/test-data/attendancereport.json"

Given('I want to see attendance report', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select the required batch and course and the student', () => {
    cy.get("#email").type(attendance.email)
    cy.get("#password").type(attendance.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains("Attendance Report").click({force: true})
    cy.get("#batchSelect").click({force:true})
    cy.contains('Sept').click()
    cy.get("#courseSelect").click({force:true})
    cy.contains('asd').click()
    cy.get("#studentSelect").click({force:true})
    cy.contains('Ashish').click()
})


Then('Attendance report is displayed', (content) => {
    cy.title().should("eq","Attendance Report | AMS")
});

