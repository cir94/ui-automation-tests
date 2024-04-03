Feature: Scrolling element into view
    Scenario: Scrolling a button into view and clicking it
    Given I open the url "http://uitestingplayground.com/scrollbars"
    When I scroll the button into view
    Then it can be clicked