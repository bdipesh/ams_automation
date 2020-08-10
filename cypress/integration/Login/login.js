Given('I open AMS login page', () => {
    cy.visit('http://localhost:3000/account/login')
  });
  
  When('I type in', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').type(element.username)
        cy.get('#password').type(element.password)
    })
  })
  
  When('I click on Login button', () => {
      cy.get("#loginButton").click()
  });
  
  Then('Dashboard should be shown', (content) => {
      cy.title().should("eq","Notice | AMS")
  });

Given('I open login page of AMS', () => {
    cy.visit('http://localhost:3000/account/login')
});

When('I type in', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').type(element.username)
        cy.get('#password').type(element.password)
    })
})

When('I click Login button', () => {
    cy.get("#loginButton").click()
});

Then('Error message should be shown', (content) => {
    cy.title().should("eq","Login | AMS")
});