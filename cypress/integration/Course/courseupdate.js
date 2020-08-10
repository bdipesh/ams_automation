import courseData from "../../fixtures/test-data/course.json"

Given('I want to update course', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type', () => {
    const $courseName = '#'+courseData.courseName
    cy.get("#email").type(courseData.email)
    cy.get("#password").type(courseData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('My Courses').click()
    cy.get($courseName).click()
    cy.get("#courseName").clear()
    cy.get("#courseName").type(courseData.updatedCourseName)
})

When('I click on update button', () => {
    cy.get("#saveAddCourse").click()
});

Then('Course is updated successfully', (content) => {
    cy.title().should("eq","Course List | AMS")
});

