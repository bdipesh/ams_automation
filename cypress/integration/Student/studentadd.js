import studentData from "../../fixtures/test-data/student.json"

Given('I want to add student', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in required data', () => {
    cy.get("#email").type(studentData.email)
    cy.get("#password").type(studentData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.contains('Students').click({force: true})
    cy.get("#addStudentButton").click()
    cy.get("#userName").type(studentData.studentName)
    cy.get("#userEmail").type(studentData.studentEmail)
    cy.get("#userPhone").type(studentData.studentPhone)
    cy.contains('Male').click()
    cy.get("#course").click({force: true})
    cy.contains('Agile Development').click()
    cy.get("#dob").click({force: true})
    cy.contains('28').click({force: true})
})

When('I click on save button', () => {
    cy.get("#saveTeacherButton").click({force:true})
});

Then('Student is added successfully', (content) => {
    cy.title().should("eq","Student List | AMS")
});

