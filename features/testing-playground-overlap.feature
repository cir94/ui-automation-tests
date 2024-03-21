Feature: Accessing and writing in overlapped element

    Scenario: Scrolling to uncover overlapped element
    Given I open the url "http://uitestingplayground.com/overlapped"
    When I scroll the overlapped Name text box into view
    Then I should be able to write in the text box