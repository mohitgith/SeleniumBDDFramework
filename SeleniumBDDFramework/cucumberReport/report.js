$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearchSO.feature");
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
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@GoogleSearch"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cottplatform\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;",
  "rows": [
    {
      "cells": [
        "ottplatform"
      ],
      "line": 17,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;1"
    },
    {
      "cells": [
        "Netflix"
      ],
      "line": 18,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@GoogleSearch"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Netflix\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_browser_is_open()"
});
formatter.result({
  "duration": 3178287100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.google_search_is_open_on_the_browser()"
});
formatter.result({
  "duration": 1979734300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Netflix",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user(String)"
});
formatter.result({
  "duration": 232204600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 2609553500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_search_result()"
});
formatter.result({
  "duration": 184066100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 4793657100,
  "status": "passed"
});
formatter.uri("GoogleSearchSO2.feature");
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
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@GoogleSearch4"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cottplatform\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;",
  "rows": [
    {
      "cells": [
        "ottplatform"
      ],
      "line": 17,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;1"
    },
    {
      "cells": [
        "Netflix"
      ],
      "line": 18,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@GoogleSearch4"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Netflix\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_browser_is_open()"
});
formatter.result({
  "duration": 1602488700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.google_search_is_open_on_the_browser()"
});
formatter.result({
  "duration": 1728516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Netflix",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user(String)"
});
formatter.result({
  "duration": 199480700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 2660811900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_search_result()"
});
formatter.result({
  "duration": 138526600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 4752138100,
  "status": "passed"
});
formatter.uri("GoogleSearchSO3.feature");
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
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@GoogleSearch5"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cottplatform\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;",
  "rows": [
    {
      "cells": [
        "ottplatform"
      ],
      "line": 17,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;1"
    },
    {
      "cells": [
        "Netflix"
      ],
      "line": 18,
      "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Google Search For OTT Platform with Scenario Outline",
  "description": "",
  "id": "google-search-for-ott-platform-with-scenario-outline;google-search-for-ott-platform-with-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@GoogleSearch5"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "google search is open on the browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Netflix\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is search result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_browser_is_open()"
});
formatter.result({
  "duration": 1633529400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.google_search_is_open_on_the_browser()"
});
formatter.result({
  "duration": 1823241600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Netflix",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user(String)"
});
formatter.result({
  "duration": 171461100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 2347629600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_search_result()"
});
formatter.result({
  "duration": 158025600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 4799836600,
  "status": "passed"
});
});