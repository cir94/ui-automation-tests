Feature: Does the browser wait for the webpage to load?

    Scenario: Browser waits for loading to finish
        Given the load delay link is clicked
        When the webpage finishes loading
        Then I should see a button and be able to click it