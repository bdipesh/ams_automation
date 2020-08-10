/// <reference types="cypress" />

class StudentTest {
    addStudent(email, password, studentName, studentEmail, studentPhone) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.contains('Students').click({force: true})
        cy.get("#addStudentButton").click()
        cy.get("#userName").type(studentName)
        cy.get("#userEmail").type(studentEmail)
        cy.get("#userPhone").type(studentPhone)
        cy.contains('Male').click()
        cy.get("#course").click({force: true})
        cy.contains('Agile Development').click()
        cy.get("#dob").click({force: true})
        cy.contains('28').click({force: true})
        cy.get("#saveTeacherButton").click({force:true})
    }

    deleteStudent(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Students').click()
        cy.get("#dropdown").click({force:true})
        cy.get("#removeDetails").click()
        cy.get("#delete").click()
        cy.get("#closeSnack").click()
    }
}

export default StudentTest