Feature: Profile and password update

  I want to update profile and password

  @smoke
  Scenario: Profile update
    Given I want to update Teacher profile
    When I type in the required data
    And I click on update button
    Then Profile is updated successfully

  @smoke
  Scenario: Password update
    Given I want to change password
    When I type in the data
    And I click on save button
    Then Password is updated successfully