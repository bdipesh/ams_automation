/// <reference types="cypress" />

class noticeTest {
    addNotice(email, password, notice) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.wait(2000)
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.get("#navBar").click({force:true})
        cy.get("#noticeAdd").click({force:true})
        cy.get("#noticeData").type(notice)
        cy.get("#post").click()
    }

    updateNotice(email, password, notice) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.wait(2000)
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.get("#navBar").click({force:true})
        cy.get("#editNotice").click({force:true})
        cy.get("#updatedPost").clear()
        cy.get("#updatedPost").type(notice)
        cy.get("#clickButton").click()
    }

    deleteNotice(email, password) {
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.wait(2000)
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.get("#navBar").click({force:true})
        cy.get("#delete").click({force:true})
        cy.get("#clickButton").click()
    }

    clickLike(email,password){
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.wait(2000)
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.get("#navBar").click({force:true})
        cy.get("#like").click({force:true})
    }

    postComment(email,password,comment){
        cy.get("#email").type(email)
        cy.get("#password").type(password)
        cy.get("#loginButton").click()
        cy.wait(2000)
        cy.get("#closeSnack").click()
        cy.wait(2000)
        cy.get("#navBar").click({force:true})
        cy.get("#comment").click({force:true})
        cy.get("#noticeComment").type(comment)
        cy.get("#postComment").click()
    }
}

export default noticeTest