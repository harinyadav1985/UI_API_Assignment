Feature: Login Suite
    Scenario: verify user login
        Given  user on login page
        When user enter valid username
        And valid password

        Then user should be able to see the home page
