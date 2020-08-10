import batchData from "../../fixtures/test-data/batch.json";

Given('I want to update batch', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type', () => {
    const $batchName = '#'+batchData.batchName
    cy.get("#email").type(batchData.email)
    cy.get("#password").type(batchData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Batches').click()
    cy.get($batchName).click()
    cy.get("#batchName").clear()
    cy.get("#batchName").type(batchData.updatedBatchName)
})

When('I click on update button', () => {
    cy.get("#saveAddBatch").click()
});

Then('Batch is updated successfully', (content) => {
    cy.contains("Successfully updated Batch.").should('be.visible')
    cy.title().should("eq","Batch | AMS")
    cy.contains(batchData.batchName).should('not.be.visible')
    cy.contains(batchData.updatedBatchName).should('be.visible')
});