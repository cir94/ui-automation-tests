Feature: Is the button clickable?

    Scenario: Button appears on screen
        Given I open the url "http://uitestingplayground.com/click"
        When the button appears
        Then I should be able to click it