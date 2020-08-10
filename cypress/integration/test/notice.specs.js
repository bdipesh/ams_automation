/// <reference types="cypress" />
import noticeData from "../../fixtures/test-data/notice.json"
import noticeTest from "../page-objects/notice.js";
import courseData from "../../fixtures/test-data/course.json";
const notice = new noticeTest()
context('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account/login')
    })
    // https://on.cypress.io/interacting-with-elements

    it('The admin logs in and adds notice', () => {
        notice.addNotice(noticeData.email,noticeData.password,noticeData.notice)
        cy.title().should("eq","Notice | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully posted notice")
                expect(noticeData.notice).to.exist
            })

    })
    it('The admin logs in and updates notice', () => {
        notice.updateNotice(noticeData.email, noticeData.password, noticeData.updateNotice)
        cy.title().should("eq","Notice | AMS").and
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully Update Post.")
            })
        expect(noticeData.updateNotice).to.exist
    })

    it('The admin logs in and delete notice', () => {
        notice.deleteNotice(noticeData.email, noticeData.password)
        cy.title().should("eq","Notice | AMS").and
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully Deleted Post.")
            })
        expect(noticeData.updateNotice).to.exist
    })

    it('The admin logs in and click like', () => {
        notice.clickLike(noticeData.email, noticeData.password)
        cy.title().should("eq","Notice | AMS").and

    })
    it('The admin logs in and adds comment', () => {
        notice.postComment(noticeData.email,noticeData.password,noticeData.noticeComment)
        cy.title().should("eq","Notice | AMS")
        cy.get(".v-snack__content")
            .then(function (message) {
                const successMessage = message.text()
                expect(successMessage).to.contains("Successfully posted comment.")
                expect(noticeData.noticeComment).to.exist
            })

    })
})
// https://on.cypress.io/type