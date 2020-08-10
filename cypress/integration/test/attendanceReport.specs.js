/// <reference types="cypress" />
import attendanceReportData from "../../fixtures/test-data/attendancereport.json"
import attendanceReportTest from "../page-objects/attendanceReport";
import attendanceData from "../../fixtures/test-data/attendance.json";
const attendanceReport = new attendanceReportTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and check the attendance report', () => {
        attendanceReport.AttendanceReport(attendanceReportData.email, attendanceReportData.password)
        cy.title().should("eq","Attendance Report | AMS")

    })

    it('The admin logs in and edit the attendance of student', () => {
        attendanceReport.UpdateAttendance(attendanceReportData.email, attendanceReportData.password)
        cy.title().should("eq","Attendance Report | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully updated attendance")
            })

    })
})
// https://on.cypress.io/type