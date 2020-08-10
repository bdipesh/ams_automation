import batchData from "../../fixtures/test-data/batch.json"

Given('I want to add batch', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in', () => {
    cy.get("#email").type(batchData.email)
    cy.get("#password").type(batchData.password)
    cy.get("#loginButton").click()
    cy.get("#closeSnack").click()
    cy.contains('Batches').click()
    cy.get("#addBatchButton").click()
    cy.get("#batchCode").type(batchData.batchCode)
    cy.get("#batchName").type(batchData.batchName)
})

When('I click on save button', () => {
    cy.get("#saveAddBatch").click()
});

Then('Batch is added successfully', (content) => {
    cy.contains("Successfully added Batch.").should('be.visible')
    cy.title().should("eq","Batch | AMS")
    cy.contains(batchData.batchName).should('be.visible')
});

