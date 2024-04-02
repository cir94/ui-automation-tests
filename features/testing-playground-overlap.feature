# This feature file is commented out to be skipped, as Devtools is not supported for Firefox with WDIO, and Chrome is currently bugged in WDIO. Until bug is fixed, this test will remain commented out.

# Link to Discussion and bug report on WDIO Github below:

# Discussion: https://github.com/webdriverio/webdriverio/discussions/12587
# Bug report: https://github.com/webdriverio/webdriverio/issues/12589

# Feature: Accessing and writing in overlapped element

#     Scenario: Scrolling to uncover overlapped element
#     Given I open the url "http://uitestingplayground.com/overlapped"
#     When I scroll the overlapped Name text box into view
#     Then I should be able to write in the text box