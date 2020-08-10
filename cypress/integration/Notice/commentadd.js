import notice from "../../fixtures/test-data/notice.json"

Given('I want to comment in a notice', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select the notice i want to comment', () => {
    cy.get("#email").type(notice.email)
    cy.get("#password").type(notice.password)
    cy.get("#loginButton").click()
    cy.wait(2000)
    cy.get("#closeSnack").click()
    cy.wait(2000)
    cy.get("#navBar").click({force:true})

})

When('I click on comment button', () => {
    cy.get("#comment").click({force:true})
});

When('I write the comment for that notice', () => {
    cy.get("#noticeComment").type(notice.noticeComment)
});

When('I click on post button', () => {
    cy.get("#postComment").click()
});

Then('Comment is posted successfully', (content) => {
    cy.title().should("eq","Notice | AMS")
});

