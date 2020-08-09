/// <reference types="cypress" />
import teacherData from "../../fixtures/test-data/teacher.json"
import TeacherTest from "../page-objects/teacherPage";
const teacher = new TeacherTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and adds batch with valid details', () => {
        teacher.addTeacher(teacherData.email, teacherData.password, teacherData.teacherName, teacherData.teacherEmail, teacherData.teacherPhone)

        cy.title().should("eq","Teacher List | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully Login. Welcome to AMS!")
            })
        expect(teacherData.teacherName).to.exist
    })
})
// https://on.cypress.io/type