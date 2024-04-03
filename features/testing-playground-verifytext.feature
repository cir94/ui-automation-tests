Feature: Searching for element with XPath

    Scenario: Looking for an element with specific text via XPath
    Given I open the url "http://uitestingplayground.com/verifytext"
    When the welcome username div loads
    Then I should be able to assert that the specific text is being displayed