Feature: Course

  I want to add Course

  @smoke
  Scenario: Course Add
    Given I want to add course
    When I type in
      | courseCode | courseName |
      | testCourseCode | testCourseName   |
    And I click on save button
    Then Course is added successfully

  @smoke
  Scenario: Course Update
    Given I want to update course
    When I type
      | courseName |
      | testUpdatedCourseName |
    And I click on update button
    Then Course is updated successfully

  @smoke
  Scenario: Course Delete
    Given I want to delete course
    When I select a course
    And I click on delete
    Then Course is deleted successfully