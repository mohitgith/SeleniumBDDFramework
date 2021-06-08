#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
@GoogleSearch1
Feature: Google Search For OTT Platform with Scenario Only

  Scenario: Google Search For OTT Platform with Scenario Only
    Given the browser is open
    When google search is open on the browser
    Then user enters "Amazon Prime Video"
    Then user clicks on search button
    Then user is search result
    Then close the browser