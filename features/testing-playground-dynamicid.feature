Feature: Accessing element that's using a dynamic ID

    Scenario: Clicking button without using ID which changes with each load
    Given I open the url "http://uitestingplayground.com/dynamicid"
    When the dynamically named button appears
    Then I should be able to click it without using its ID