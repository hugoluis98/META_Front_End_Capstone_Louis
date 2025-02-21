import React from 'react';
import {mount} from 'cypress-react-unit-test';
import App from '../../App';

describe('App', () => {
    it('renders learn react link', () => {
        mount(<App />);
        cy.contains('Learning React').should('be.visible');
    });
});