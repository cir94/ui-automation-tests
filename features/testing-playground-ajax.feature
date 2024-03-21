Feature: Element appearing after processing AJAX Request

    Scenario: Clicking button to start AJAX request
      Given I open the url "http://uitestingplayground.com/ajax"
        When the AJAX button is clicked
            Then an element should appear confirming data loaded