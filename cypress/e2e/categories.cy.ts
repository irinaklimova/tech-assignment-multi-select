describe('Categories page ', () => {
  it('displays 429 categories with checkbox', () => {
    cy.toCategories();
    cy.get('[data-testid="checkbox-input-component"]').should('have.length', 429);
  });

  it('if user checks the item, item displays on the top of the list', () => {
    cy.toCategories();
    let title;
    cy.get('[data-testid="checkbox-input-component"] > span').eq(3).then($el => {
      title = $el.text();
    });
    cy.get('[data-testid="checkbox-input-component"] > [type="checkbox"]').eq(3).check();
    cy.get('[data-testid="checkbox-input-component"] > span').eq(0).should(($span) => {
      expect($span.text()).to.eq(title);
    });
    cy.get('[data-testid="checkbox-input-component"] > [type="checkbox"]').eq(0).should('be.checked');
  });

  it('if user types in the search, filtered items is displayed', () => {
    cy.toCategories();
    cy.get('[data-testid="search-input"]').type('fa');
    cy.get('[data-testid="checkbox-input-component"] > span').each(($el) => {
      cy.wrap($el).isIncludesSearchString('fa').should('be.true')
    })
  });
})