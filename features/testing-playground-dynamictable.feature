Feature: Finding entry in a dynamic table
    Scenario: Finding and comparing two numbers in a dynamic table
    Given I open the url "http://uitestingplayground.com/dynamictable"
    When the table is loaded and the correct value is defined
    Then the value should be the same as the static variable on the page