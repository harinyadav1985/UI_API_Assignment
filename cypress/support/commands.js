// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import login_data from "../fixtures/login-page-data.json";
import logout_data from "../fixtures/login-page-data.json";
Cypress.Commands.add("login", (email, password) => {
  cy.visit(Cypress.env("baseUrl"));
  cy.get(login_data.emailOrUserName_loc).type(login_data.emailOrUserName_data);
  cy.get(login_data.password_loc).type(login_data.password_data);
  cy.get(login_data.login_btn_loc).click();
});
Cypress.Commands.add("logout", () => {
  cy.get(logout_data.logout_btn_loc).click();
});
