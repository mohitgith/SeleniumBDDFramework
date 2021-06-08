#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
@GoogleSearch4 @Regression
Feature: Google Search For OTT Platform with Scenario Outline

  Scenario Outline: Google Search For OTT Platform with Scenario Outline
    Given the browser is open
    When google search is open on the browser
    Then user enters "<ottplatform>"
    Then user clicks on search button
    Then user is search result
    Then close the browser

    Examples: 
      | ottplatform  |
      | Netflix      |
