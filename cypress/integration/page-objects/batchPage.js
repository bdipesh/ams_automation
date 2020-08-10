/// <reference types="cypress" />

class BatchTest {
    addBatch(email, password, batchCode, batchName) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Batches').click()
        cy.get("#addBatchButton").click()
        cy.get("#batchCode").type(batchCode)
        cy.get("#batchName").type(batchName)
        cy.get("#saveAddBatch").click()
    }

    updateBatch(email, password, batchName, updatedBatchName) {
        const $batchName = '#'+batchName
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Batches').click()
        cy.get($batchName).click()
        cy.get("#batchName").clear()
        cy.get("#batchName").type(updatedBatchName)
        cy.get("#saveAddBatch").click()
    }

    deleteBatch(email, password, batchCode) {
        const $batchCode = '#'+batchCode
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.get("#closeSnack").click()
        cy.contains('Batches').click()
        cy.get($batchCode).click()
        cy.get("#batchDelete").click({force:true})
    }
}

export default BatchTest