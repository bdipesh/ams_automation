import teacherData from "../../fixtures/test-data/teacher.json"

Given('I want to add Teacher', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in the required data', () => {
    cy.get("#email").type(teacherData.email)
    cy.get("#password").type(teacherData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Teachers').click()
    cy.get("#addTeacherButton").click()
    cy.get("#userName").type(teacherData.teacherName)
    cy.get("#userEmail").type(teacherData.teacherEmail)
    cy.get("#userPhone").type(teacherData.teacherPhone)
    cy.contains('Female').click()
    cy.get("#dob").click({force: true})
    cy.contains('30').click({force: true})
    cy.get("#course").click({force: true})
    cy.contains('Agile Development').click({force:true})
    cy.get("#batch").click({force: true})
    cy.contains('Sept').click({force:true})
})

When('I click on save button', () => {
    cy.get("#saveTeacherButton").click({force:true})
});

Then('Teacher is added successfully', (content) => {
    cy.title().should("eq","Teacher List | AMS")
});

