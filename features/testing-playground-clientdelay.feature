Feature: Does the test wait for an element to appear?

 Scenario: Element appears on screen after delay
    Given I open the url "http://uitestingplayground.com/clientdelay"
    When the button is clicked
    Then I should see an element appear after a delay