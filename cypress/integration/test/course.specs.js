/// <reference types="cypress" />
import courseData from "../../fixtures/test-data/course.json"
import CourseTest from "../page-objects/coursePage"
const course = new CourseTest()
context('Course CRUD', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and adds course with valid details', () => {
        //course.doLogin(courseData.email, courseData.password)
        course.addCourse(courseData.email, courseData.password, courseData.courseCode, courseData.courseName)
        cy.title().should("eq","Course List | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully added Course.")
            })
        expect(courseData.courseName).to.exist
    })

    it('The admin logs in and updates course with valid details', () => {
        course.updateCourse(courseData.email, courseData.password, courseData.courseName, courseData.updatedCourseName)
        cy.title().should("eq","Course List | AMS").and
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully updated Course.")
            })
        expect(courseData.updatedCourseName).to.exist
    })

    it('The admin logs in and deletes course', () => {
        course.deleteCourse(courseData.email, courseData.password, courseData.courseCode, courseData.courseName)
        cy.title().should("eq","Course List | AMS").and
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully removed Course.")
            })
        cy.get(courseData.updatedCourseName).should('not.exist')
    })
})
// https://on.cypress.io/type