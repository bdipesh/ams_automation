import batchData from "../../fixtures/test-data/batch.json";

Given('I want to delete batch', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I select a batch', () => {
    const $batchCode = '#'+batchData.batchCode
    cy.get("#email").type(batchData.email)
    cy.get("#password").type(batchData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Batches').click()
    cy.get($batchCode).click()
})

When('I click on delete', () => {
    cy.get("#batchDelete").click({force:true})
});

Then('Batch is deleted successfully', (content) => {
    cy.contains("Successfully removed Batch.").should('be.visible')
    cy.title().should("eq","Batch | AMS")
    cy.contains(batchData.batchName).should('not.be.visible')
    cy.contains(batchData.updatedBatchName).should('not.be.visible')
});