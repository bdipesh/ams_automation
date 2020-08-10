import courseData from "../../fixtures/test-data/course.json"

Given('I want to delete course', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a course', () => {
    const $courseCode = '#'+courseData.courseCode
    cy.get("#email").type(courseData.email)
    cy.get("#password").type(courseData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('My Courses').click()
    cy.get($courseCode).click()
})

When('I click on delete', () => {
    cy.get("#courseDelete").click({force:true})
});

Then('Course is deleted successfully', (content) => {
    cy.title().should("eq","Course List | AMS")
});

