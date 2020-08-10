Feature: Notice

  I want to add,delete,update,like and comment notice

  @smoke
  Scenario: Notice Add
    Given I want to add notice
    When I type in the notice data
    And I click on save button
    Then Notice is added successfully

  @smoke
  Scenario: Notice Delete
    Given I want to delete notice
    When I select a the notice i want to delete
    And I click on delete button
    Then Notice is deleted successfully

  @smoke
  Scenario: Notice Update
    Given I want to update notice details
    When I select a the notice i want to update
    And I click on update button in the card
    Then Notice is updated successfully

  @smoke
  Scenario: Notice like
    Given I want to like the notice that are posted
    When I select a the notice i want to like
    And I click on like button
    Then Notice is liked

  @smoke
  Scenario: Notice Comment
    Given I want to comment in a notice
    When I select the notice i want to comment
    And I click on comment button
    And I write the comment for that notice
    And I click on post button
    Then Comment is posted successfully

