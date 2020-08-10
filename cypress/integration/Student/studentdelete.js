import studentData from "../../fixtures/test-data/student.json"

Given('I want to delete Student', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a student', () => {
    cy.get("#email").type(studentData.email)
    cy.get("#password").type(studentData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Students').click()
    cy.get("#dropdown").click({force:true})
    cy.get("#removeDetails").click()
})

When('I click on delete', () => {
    cy.get("#delete").click()
});

Then('Student is deleted successfully', (content) => {
    cy.title().should("eq","Student List | AMS")
});

