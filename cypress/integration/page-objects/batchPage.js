/// <reference types="cypress" />

class AddBatchTest {
    addBatch(email, password, batchCode, batchName) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.contains('Batches').click()
        cy.get("#addBatchButton").click()
        cy.get("#batchCode").type(batchCode)
        cy.get("#batchName").type(batchName)
        cy.get("#saveAddBatch").click()
    }
}

export default AddBatchTest