/// <reference types="cypress" />

class TeacherTest {
    addTeacher(email, password, teacherName, teacherEmail, teacherPhone) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Teachers').click()
        cy.get("#addTeacherButton").click()
        cy.get("#userName").type(teacherName)
        cy.get("#userEmail").type(teacherEmail)
        cy.get("#userPhone").type(teacherPhone)
        cy.contains('Female').click()
        cy.get("#dob").click({force: true})
        cy.contains('30').click({force: true})
        cy.get("#course").click({force: true})
        cy.contains('Agile Development').click({force:true})
        cy.get("#batch").click({force: true})
        cy.contains('Sept').click({force:true})
        cy.get("#saveTeacherButton").click({force:true})
        cy.wait(1000)
    }

    deleteTeacher(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Teachers').click()
        cy.get("#dropdown").click({force:true})
        cy.get("#removeDetails").click()
        cy.get("#closeSnack").click()
        cy.wait(1000)
    }
}

export default TeacherTest