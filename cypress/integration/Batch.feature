Feature: Batch

  I want to add batch

  @smoke
  Scenario: Batch Add
    Given I want to add batch
    When I type in
      | batchCode | batchName |
      | testBatchCode | testBatchName   |
    And I click on save button
    Then Batch is added successfully

    @smoke
    Scenario: Batch Update
      Given I want to update batch
      When I type
      | batchName |
      | testUpdatedBatchName |
      And I click on update button
      Then Batch is updated successfully

      @smoke
      Scenario: Batch Delete
        Given I want to delete batch
        When I select a batch
        And I click on delete
        Then Batch is deleted successfully