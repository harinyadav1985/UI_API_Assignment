///<reference types ="cypress" />

import login_data from "../fixtures/login-page-data.json";
//import logout_data from "../fixtures/login-page-data.json";

describe("Wave Trial login suite", () => {
  it("verify login with valid credentials and doing mouse click", () => {
    cy.login();
    //cy.get("body").find("cy.get('#inputEmail')");
    cy.get("#inputEmail").type("text");
    cy.title().should("eq", "Wave trial");
  });

  it("verify login with valid credentials and with pressing enter key", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(login_data.emailOrUserName_loc).type(
      login_data.emailOrUserName_data
    );
    cy.get(login_data.password_loc).type(login_data.password_data);
    cy.get(login_data.login_btn_loc).type("{enter}");
    cy.title().should("eq", "Wave trial");
  });
  it("verify login with valid username and with invalid password", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(login_data.emailOrUserName_loc).type(
      login_data.emailOrUserName_data
    );
    cy.get(login_data.password_loc).type("test");
    cy.get(login_data.login_btn_loc).click();
    cy.get("#inputEmail").type("text");
    cy.get("#login").click({ force: true });
    cy.get(".cbox_messagebox").contains("incorrect username or password");
  });
  it("verify login with blank username and blank password", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(login_data.emailOrUserName_loc).type("");
    cy.get(login_data.password_loc).type("");
    cy.get(login_data.login_btn_loc).click();
  });
});
describe("Wave Trial login suite", () => {
  it("verify logout", () => {
    cy.login();
    cy.get("[title=`QA role Assignment Efrain DLS`]")
      .invoke("show")
      .should("have.class", "logout")
      .click();
    //cy.logout();
  });
  it("verify user should not be able to navigate back after logout", () => {
    cy.login();
    cy.get("[title=`QA role Assignment Efrain DLS`]")
      .invoke("show")
      .should("have.class", "logout")
      .click();
    cy.go("1");

    //cy.logout();
  });
});
