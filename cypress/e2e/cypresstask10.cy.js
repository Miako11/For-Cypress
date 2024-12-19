describe('Verify Subscription in Home Page', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  });
  it('should verify subscription', () => {
    
    //Scroll down to footer
    cy.scrollTo('bottom');

    // Verify text 'SUBSCRIPTION' contains-ით არ გამოვიდა
    cy.get('.single-widget > h2').should('be.visible');

    // Enter email address in input and 
    const email = 'marriemari0@gmail.com';
    cy.get('#susbscribe_email').type(email);

    // click arrow button
    cy.get('#subscribe').click();

    // Verify success message 'You have been successfully subscribed!' is visible
    cy.get('.alert-success').should('be.visible').and('contain.text', 'You have been successfully subscribed!');
  });
})


