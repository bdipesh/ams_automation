/// <reference types="cypress" />

class AttendanceTest {
    TakeAttendance(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Take Attendance').click({force: true})
        cy.get("#batchSelect").click({force:true})
        cy.contains('Sept').click()
        cy.get("#courseSelect").click({force:true})
        cy.contains('asd').click()
        cy.get("#present").click({force:true})
        cy.get("#save").click()
    }
}

export default AttendanceTest