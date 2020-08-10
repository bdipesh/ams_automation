Feature: Teacher

  I want to add and delete teacher

  @smoke
  Scenario: Teacher Add
    Given I want to add Teacher
    When I type in the required data
    And I click on save button
    Then Teacher is added successfully

  @smoke
  Scenario: Teacher Delete
    Given I want to delete teacher
    When I select a teacher
    And I click on remove button
    Then Teacher is deleted successfully