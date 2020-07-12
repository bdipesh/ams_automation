/// <reference types="cypress" />
import batchData from "../../fixtures/test-data/batch.json"
import AddBatchTest from "../page-objects/batchPage";
const batch = new AddBatchTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and adds batch with valid details', () => {
        //course.doLogin(courseData.email, courseData.password)
        batch.addBatch(batchData.email, batchData.password, batchData.batchCode, batchData.batchName)
        cy.title().should("eq","Batch | Attendance management System")
    })
})
// https://on.cypress.io/type