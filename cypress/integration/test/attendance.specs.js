/// <reference types="cypress" />
import attendanceData from "../../fixtures/test-data/attendance.json"
import attendanceTest from "../page-objects/attendancePage";
const attendance = new attendanceTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and takes attendance', () => {
        attendance.TakeAttendance(attendanceData.email, attendanceData.password)
        cy.title().should("eq","Attendance | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully taken Attendance")
            })

    })
})
// https://on.cypress.io/type