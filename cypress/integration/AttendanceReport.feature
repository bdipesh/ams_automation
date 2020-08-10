Feature: Attendance Report

  I want to see attendance Report

  @smoke
  Scenario: See attendance report
    Given I want to see attendance report
    When I select the required batch and course and the student
    Then Attendance report is displayed

  @smoke
  Scenario: Update attendance
    Given I want to update attendance
    When I select the required batch and course and the student
    Then Attendance is updated successfully