/// <reference types="cypress" />

class AttendanceReportTest {
    AttendanceReport(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains("Attendance Report").click({force: true})
        cy.get("#batchSelect").click({force:true})
        cy.contains('Sept').click()
        cy.get("#courseSelect").click({force:true})
        cy.contains('asd').click()
        cy.get("#studentSelect").click({force:true})
        cy.contains('asdasda').click()
    }

    UpdateAttendance(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains("Attendance Report").click({force: true})
        cy.get("#batchSelect").click({force:true})
        cy.contains('Sept').click()
        cy.get("#courseSelect").click({force:true})
        cy.contains('asd').click()
        cy.get("#studentSelect").click({force:true})
        cy.contains('asdasda').click()
        cy.get("#change").click({force:true})
    }
}

export default AttendanceReportTest