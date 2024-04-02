Feature: Testing stopping of progress bar
    Scenario: Stopping progress bar at minimum of 75%
    Given I open the url "http://uitestingplayground.com/progressbar"
    When the start button is clicked and the progress bar reaches at least 75%
    Then the stop button is pressed to stop it