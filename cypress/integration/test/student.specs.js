/// <reference types="cypress" />
import studentData from "../../fixtures/test-data/student.json"
import StudentTest from "../page-objects/studentPage";
const student = new StudentTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and adds batch with valid details', () => {
        student.addStudent(studentData.email, studentData.password, studentData.studentName, studentData.studentEmail, studentData.studentPhone)

        cy.title().should("eq","Student List | AMS")
        // cy.get(".v-snack__content")
        //     .then(function (message) {
        //         const successMessage = message.text()
        //         expect(successMessage).to.contains("Successfully created Student")
        //         expect(studentData.studentName).to.exist
        //     })

    })
})
// https://on.cypress.io/type