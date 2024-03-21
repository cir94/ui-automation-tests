Feature: Elements hidden with action

    Scenario: Pressing Hide Button will hide all other buttons on page
    Given I open the url "http://uitestingplayground.com/visibility"
    When the hide button is pressed
    Then all other buttons on the page should be hidden and unable to be clicked