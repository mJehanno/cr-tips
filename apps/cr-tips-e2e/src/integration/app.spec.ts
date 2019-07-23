import { getGreeting } from '../support/app.po';

describe('cr-tips', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to cr-tips!');
  });
});
