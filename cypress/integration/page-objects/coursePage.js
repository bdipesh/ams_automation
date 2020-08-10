/// <reference types="cypress" />

class CourseTest {
    addCourse(email, password, courseCode, courseName) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('My Courses').click()
        cy.get("#addCourseButton").click()
        cy.get("#courseCode").type(courseCode)
        cy.get("#courseName").type(courseName)
        cy.get("#saveAddCourse").click()
    }

    updateCourse(email, password, courseName, updatedCourseName) {
        const $courseName = '#'+courseName
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('My Courses').click()
        cy.get($courseName).click()
        cy.get("#courseName").clear()
        cy.get("#courseName").type(updatedCourseName)
        cy.get("#saveAddCourse").click()
    }

    deleteCourse(email, password, courseCode) {
        const $courseCode = '#'+courseCode
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('My Courses').click()
        cy.get($courseCode).click()
        cy.get("#courseDelete").click({force:true})
    }
}

export default CourseTest