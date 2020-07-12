/// <reference types="cypress" />
import courseData from "../../fixtures/test-data/course.json"
import AddCourseTest from "../page-objects/coursePage"
const course = new AddCourseTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The user logs in with valid credential and sees the Home page', () => {
        //course.doLogin(courseData.email, courseData.password)
        course.addCourse(courseData.email, courseData.password, courseData.courseCode, courseData.courseName)
        cy.title().should("eq","Notice | Attendance Management System")
    })
})
// https://on.cypress.io/type