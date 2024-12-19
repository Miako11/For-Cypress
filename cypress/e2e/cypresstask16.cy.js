describe('Place Order - Login before Checkout', () => {
    it('should place order after logging in', () => {
    
      cy.visit('http://automationexercise.com');
  
      // Click 'Signup / Login' button
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  
      // Fill email, password and click 'Login' button
      cy.get('input[data-qa="login-email"]').type('marriemari0@gmail.com'); 
      cy.get('input[data-qa="login-password"]').type('marriemari0'); 
      cy.get('button[data-qa="login-button"]').click();
  
      // Verify 'Logged in as username' at top
      cy.get('.shop-menu > .nav').should('contain', 'Logged in as Marrie'); 
  
      // Add products to cart
      cy.get('a[href="/products"]').click(); // Navigate to products page
      cy.get('.product-overlay').first().invoke('show'); // Hover over first product
      cy.get('.add-to-cart').first().click(); // Add the first product to the cart
      cy.get('.modal-footer .btn-success').click(); // Click "Continue Shopping"
  
      // Add a second product
      cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover').within(() => {
        cy.contains('Add to cart').click();
      });
    
  
      // Click 'Cart' button
      cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  
      // Verify that cart page is displayed
      cy.url().should('include', '/view_cart');
      cy.get('.cart_info').should('be.visible');
  
      // Click Proceed To Checkout
      cy.get('.col-sm-6 > .btn').click();
  
      // Verify Address Details and Review Your Order
      cy.get('#cart_items > .container').should('contain', 'Address Details');
      cy.get('#cart_items > .container').should('contain', 'Review Your Order');
  
      // Enter description in comment text area and click 'Place Order'
      cy.get('.form-control').type('Hello');
      cy.get(':nth-child(7) > .btn').click();
  
      // Enter payment details
      cy.get('input[name="name_on_card"]').type('Marrie mari');
      cy.get('input[name="card_number"]').type('11111');
      cy.get('input[name="cvc"]').type('111');
      cy.get('input[name="expiry_month"]').type('01');
      cy.get('input[name="expiry_year"]').type('2028');
  
      // Click 'Pay and Confirm Order' button
      cy.get('button[data-qa="pay-button"]').click();
  
      // Verify success message 'Your order has been placed successfully!'
      cy.get('.col-sm-9').should('contain', 'Congratulations! Your order has been confirmed!'); //Congratulations! Your order has been confirmed!-იწერება
    });
  })
  


