/// <reference types = "cypress"/>

const data = require("../fixtures/api-data.json");

describe("get-top-rated-movies suite", () => {
  it("verify api with success", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/top_rated?api_key=${Cypress.env(
        "api_key"
      )}`,
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).haveOwnProperty("page");
      expect(res.body).haveOwnProperty("page");
      expect(res.body).haveOwnProperty("results");
      expect(res.body).haveOwnProperty("total_results");
      //will validate presence of other attributes as well and compare values of api with database
    });
  });

  it("verify api with unauthorized", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/top_rated?api_key=`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).haveOwnProperty("status_code", 7);
      expect(res.body).haveOwnProperty(
        "status_message",
        "Invalid API key: You must be granted a valid key."
      );
      expect(res.body).haveOwnProperty("success", false);
    });
  });

  it("verify api with not found", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("apiUrl")}/?api_key=${Cypress.env("api_key")}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body).haveOwnProperty("status_code", 34);
      expect(res.body).haveOwnProperty(
        "status_message",
        "The resource you requested could not be found."
      );
      expect(res.body).haveOwnProperty("success", false);
    });
  });
});

describe("rate-movies suite", () => {
  it("verify api with success", () => {
    cy.request({
      method: "GET",
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key=efb4ee7ee0ec79c7b99bf100328d928c`,
    })
      .then((res) => {
        const request_token = res.body.request_token;
        return request_token;
      })
      .then((request_token) => {
        cy.log(request_token);
        cy.request({
          method: "POST",
          url: `${Cypress.env("apiUrl")}/${
            data.movie_id
          }/rating?api_key=${Cypress.env("api_key")}`,
          token: request_token,
          failOnStatusCode: false,
        }).then((res) => {
          /*  expect(res.status).to.eq(200);
          expect(res.body).haveOwnProperty("page");
          expect(res.body).haveOwnProperty("results");
          expect(res.body).haveOwnProperty("total_results"); */
          //will validate presence of other attributes as well and compare values of api with database
        });
      });
  });

  it("verify api with unauthorized", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/${data.movie_id}/rating?api_key=`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).haveOwnProperty("status_code", 7);
      expect(res.body).haveOwnProperty(
        "status_message",
        "Invalid API key: You must be granted a valid key."
      );
      expect(res.body).haveOwnProperty("success", false);
    });
  });

  it("verify api with not found", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/rating?api_key=${Cypress.env("api_key")}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body).haveOwnProperty("status_code", 34);
      expect(res.body).haveOwnProperty(
        "status_message",
        "The resource you requested could not be found."
      );
      expect(res.body).haveOwnProperty("success", false);
    });
  });
});
