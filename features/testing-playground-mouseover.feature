Feature: Clicking on button even after element is modified

    Scenario: Recording 2 consecutive clicks on element
        Given I open the url "http://uitestingplayground.com/mouseover"
        When the element is hovered and its class name changes 
        Then I should be able to click it again