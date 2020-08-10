Feature: Student

  I want to add and delete student

  @smoke
  Scenario: Student Add
    Given I want to add student
    When I type in required data
    And I click on save button
    Then Student is added successfully

  @smoke
  Scenario: Student Delete
    Given I want to delete Student
    When I select a student
    And I click on delete
    Then Student is deleted successfully