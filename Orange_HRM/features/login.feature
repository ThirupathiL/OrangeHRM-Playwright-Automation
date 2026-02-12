Feature: Login and navigate dashboard
    @Orange
  Scenario: Login and click all tabs
    Given I am on the login page
    When I login with "Admin" and "admin123"
    Then I should be able to click all tabs on the dashboard