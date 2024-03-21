Feature: Button covering another button after it is clicked

    Scenario: Blue button covers the green button after its clicked
    Given I open the url "http://uitestingplayground.com/hiddenlayers"
    When the green button is clicked
    Then a blue button should cover it making the green one unclickable