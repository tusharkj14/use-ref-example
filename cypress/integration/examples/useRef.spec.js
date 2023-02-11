/* eslint-disable no-undef */
describe('useRef hook demonstration', () => {
    it('focuses the input when the button is clicked', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input[type="text"]').should('not.be.focused');
        cy.get('button').click();
        cy.get('input[type="text"]').should('be.focused');
        cy.get('.extra-text').click()
        cy.get('input[type="text"]').should('not.be.focused');
    });
});
