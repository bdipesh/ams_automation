/// <reference types="cypress" />

class StudentTest {
    addStudent(email, password, studentName, studentEmail, studentPhone) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Students').click({force: true})
        cy.get("#addStudentButton").click()
        cy.get("#userName").type(studentName)
        cy.get("#userEmail").type(studentEmail)
        cy.get("#userPhone").type(studentPhone)
        cy.contains('Male').click()
        cy.get("#dob").click({force: true})
        cy.contains('30').click({force: true})
        cy.get("#course").click({force: true})
        cy.contains('Agile Development').click()
        cy.get("#saveTeacherButton").click()
    }
}

export default StudentTest