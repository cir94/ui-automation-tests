Feature: Clicking on button even after element is modified

    Scenario: Recording 2 consecutive clicks on element
        Given the webpage is opened
        When the element is hovered and its class name changes 
        Then I should be able to click it again