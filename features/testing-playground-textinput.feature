Feature: Changing button text through input box

    Scenario: Typing text into field to change text in button
    Given I open the url "http://uitestingplayground.com/textinput"
    When I put text in the field and press the button
    Then the button should have the text I put in