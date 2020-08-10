import teacherData from "../../fixtures/test-data/teacher.json"

Given('I want to delete teacher', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a teacher', () => {
    cy.get("#email").type(teacherData.email)
    cy.get("#password").type(teacherData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Teachers').click()
    cy.get("#dropdown").click({force:true})

})

When('I click on remove button', () => {
    cy.get("#removeDetails").click()
});

Then('Teacher is deleted successfully', (content) => {
    cy.title().should("eq","Teacher List | AMS")
});

