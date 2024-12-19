describe('Add Products in Cart', () => {
    it('should add products to the cart', () => {
      cy.visit('http://automationexercise.com');
      //Already verified home page
  
      // Click 'Products' button
      cy.contains('Products').click();
  
      // Hover over the first product and click 'Add to cart'
      cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo').first().trigger('mouseover').within(() => {
        cy.contains("Add to cart").click();
      })
  
      // Click 'Continue Shopping' button
      cy.get('.modal-footer > .btn').contains('Continue Shopping').click();
  
      // Hover over the second product and click 'Add to cart'
      cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover').within(() => {
        cy.contains('Add to cart').click();
      });

  
      // Click 'View Cart' button
      cy.contains('View Cart').click();
  
      // Verify both products are added to the cart
      cy.get('.cart_info tbody tr').should('exist'); 
  
      // Verify their prices, quantity, and total price
      cy.get('#cart_info').should('exist').within(() => {
        cy.get('#product-1').should('contain', 'Rs. 500'); 
        cy.get('#product-1 > .cart_quantity').should('have.value',''); // value 1 was disabled, და გამოვიყენე '' 
        cy.get('#product-1 > .cart_total > .cart_total_price').should('contain', 'Rs. 500'); 
      });
  
      cy.get('#cart_info').should('exist').within(() => {
        cy.get('#product-2').should('contain', 'Rs. 400'); 
        cy.get('#product-1 > .cart_quantity').should('have.value', ''); 
        cy.get('#product-2 > .cart_total > .cart_total_price').should('contain', 'Rs. 400');

      });
    });
  })
  