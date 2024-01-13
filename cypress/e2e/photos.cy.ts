const path = require('path');

describe('PhotosTable spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9003/');
  });

  it('should show more than 5 photos when data is fetched', () => {
    cy.get('.loading.loading-spinner').should('not.exist');
    cy.get('tbody tr').should('have.length.greaterThan', 5);
  });

  it('should download a .json file', () => {
    cy.get('.loading.loading-spinner').should('not.exist');
    cy.get('tbody tr').should('have.length.greaterThan', 5);

    cy.get('tbody tr').first().find('[aria-label="Download button"]').click();
    const downloadsFolder = Cypress.config('downloadsFolder');
    cy.readFile(path.join(downloadsFolder, 'photo_1.json')).should('exist');
  });

  it('should download a .csv file', () => {
    cy.get('.loading.loading-spinner').should('not.exist');
    cy.get('tbody tr').should('have.length.greaterThan', 5);

    cy.get('[aria-label="Change download method"]').click();
    cy.get('tbody tr').first().find('[aria-label="Download button"]').click();
    const downloadsFolder = Cypress.config('downloadsFolder');
    cy.readFile(path.join(downloadsFolder, 'photo_1.csv')).should('exist');
  });
});
