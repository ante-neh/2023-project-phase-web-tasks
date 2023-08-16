
describe('EditContact Component', () => {
    // beforeEach(() => {
    // });
    
    it('should load contact details for editing', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-testid="fullName"]').should('have.value', 'anteneh');
      cy.get('[data-testid="age"]').should('have.value', '23');
      cy.get('[data-testid="department"]').should('have.value', 'information system');
    });
  
    it('should update contact details', () => {
      cy.visit('http://localhost:3000/edit/1692194168495')
      cy.get('[data-testid="fullName"]').clear().type('anteneh amare');
      cy.get('[data-testid="age"]').clear().type('25');
      cy.get('[data-testid="department"]').clear().type('SWE');
      cy.get('[data-testid="update-button"]').click();
  
      cy.get('[data-testid="fullName"]').should('contain', 'anteneh amare');
    });
  
    it('should delete a contact', () => {
      cy.visit('http://localhost:3000/edit/1692194168495')
      cy.get('[data-testid="delete-button"]').click();
  
      cy.get('[data-testid="fullName"]').should('not.contain', 'anteneh amare');
    });
  });
  