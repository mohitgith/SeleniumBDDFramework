$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AutomationPractice.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    }
  ],
  "line": 6,
  "name": "Automation Practice",
  "description": "",
  "id": "automation-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@AutomationPractice"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Automation Practice",
  "description": "",
  "id": "automation-practice;automation-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is on automation practice page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#And user clicks on the \"radiobutton1\""
    },
    {
      "line": 11,
      "value": "#Then user select the \"option3\" from the dropdown"
    },
    {
      "line": 12,
      "value": "#When user clicks on Switch Window Button"
    },
    {
      "line": 13,
      "value": "#And user clicks on Switch Tab Button"
    }
  ],
  "line": 14,
  "name": "user clicks on Switch Alert Button",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationPracticeSteps.user_is_on_automation_practice_page()"
});
formatter.result({
  "duration": 10580826900,
  "status": "passed"
});
formatter.match({
  "location": "AutomationPracticeSteps.user_clicks_on_Switch_Alert_Button()"
});
formatter.result({
  "duration": 835233900,
  "status": "passed"
});
});