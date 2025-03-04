Cypress.Commands.add('toCategories', () => cy.visit('http://localhost:3000/categories'));

Cypress.Commands.add('isIncludesSearchString', { prevSubject: 'element' }, (subject, searchString) => {
        const text = Cypress._.toLower(subject.text());
        return text.includes(Cypress._.toLower(searchString));
    }
);