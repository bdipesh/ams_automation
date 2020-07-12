/// <reference types="cypress" />

class AddCourseTest {
    doLogin(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
    }
    addCourse(email, password, courseCode, courseName) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.contains('My Courses').click()
        cy.get("#addCourseButton").click()
        cy.get("#courseCode").type(courseCode)
        cy.get("#courseName").type(courseName)
        cy.get("#saveAddCourse").click()
    }
}

export default AddCourseTest