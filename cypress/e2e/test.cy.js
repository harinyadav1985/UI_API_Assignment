///<reference types ="cypress" />

import login_data from "../fixtures/login-page-data.json";
//import logout_data from "../fixtures/login-page-data.json";

it("verify login", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("[name = username]").type("Admin");
  cy.get("[name = username]").invoke("val", 25).trigger("change");
  cy.get("[name = username]").should("have.value", "25");

  /* cy.get("[name = password]").type("admin123");
  cy.get("[type=submit]").click();
  cy.title().should("contain", "OrangeHRM");
  cy.contains("Admin").click();
  cy.get("[alt=`profile picture`]").click();
  cy.contains("Logout"); */
});
