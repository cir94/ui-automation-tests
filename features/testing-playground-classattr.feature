Feature: Clicking on button via class and XPath

    Scenario: Using both class and XPath to click button
        Given the webpage is opened
        When the button is clicked using its class name and opens an alert
        Then the alert should be closed and the button is clicked again using its XPath 