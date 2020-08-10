Feature: Attendance

  I want to take attendance

  @smoke
  Scenario: Take attendance
    Given I want to take attendance
    When I select the required batch and course and present the student
    And I click on save button
    Then Attendance is saved successfully