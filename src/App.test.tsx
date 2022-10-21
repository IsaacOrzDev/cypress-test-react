import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('renders learn react link', () => {
  it('works', () => {
    mount(<App />);
    cy.get('a').contains('Learn React');
  });
});
