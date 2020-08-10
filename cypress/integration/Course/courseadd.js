import courseData from "../../fixtures/test-data/course.json"

Given('I want to add course', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in', () => {
    cy.get("#email").type(courseData.email)
    cy.get("#password").type(courseData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('My Courses').click()
    cy.get("#addCourseButton").click()
    cy.get("#courseCode").type(courseData.courseCode)
    cy.get("#courseName").type(courseData.courseName)
})

When('I click on save button', () => {
    cy.get("#saveAddCourse").click()
});

Then('Course is added successfully', (content) => {
    cy.title().should("eq","Course List | AMS")
});

