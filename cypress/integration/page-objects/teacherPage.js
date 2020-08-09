/// <reference types="cypress" />

class TeacherTest {
    addTeacher(email, password, teacherName, teacherEmail, teacherPhone) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.contains('Teachers').click()
        cy.get("#addTeacherButton").click()
        cy.get("#teacherName").type(teacherName)
        cy.get("#teacherEmail").type(teacherEmail)
        cy.get("#teacherPhone").type(teacherPhone)
        cy.contains('Female').click()
        cy.get("#dob").click({force: true})
        cy.contains('30').click({force: true})
        cy.get("#course").click({force: true})
        cy.contains('Agile Development').click()
        cy.get("#batch").click({force: true})
        cy.contains('Nov 2020 A').click()
        cy.get("#saveTeacherButton").click()
    }
}

export default TeacherTest