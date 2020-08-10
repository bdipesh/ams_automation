Feature: Login

  I want to log into AMS

  @smoke
  Scenario: AMS Login
    Given I open AMS login page
    When I type in
      |  username  | password  |
      |  dipesh@gmail.com | hellonepal  |
    And I click on Login button
    Then Dashboard should be shown

    @smoke
    Scenario: AMS Login with wrong input
      Given I open login page of AMS
      When I type in
      | username | password  |
      | invalid@invalid.com | invalid  |
      And I click Login button
      Then Error message should be shown