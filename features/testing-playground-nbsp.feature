Feature: Finding button using XPath with Non-Breaking Space
    Scenario: Finding a button with a non-breaking space and click it
    Given I open the url "http://uitestingplayground.com/nbsp"
    When the button is found via XPath
    Then it should be able to be clicked