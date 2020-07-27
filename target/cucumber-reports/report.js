$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:featurefiles/mytest.feature");
formatter.feature({
  "name": "Verify footer section",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SceanrioTest1 |",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "this is given statement one",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.this_is_given_statement_one()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is when one",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.this_is_when_one()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is then one",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.this_is_then_one()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SceanrioTest1 |",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "this is given statement two",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.this_is_given_statement_two()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is when two",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.this_is_when_two()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is then  two",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.this_is_then_two()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SceanrioTest1 |",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "this is given statement three",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.this_is_given_statement_three()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is when three",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.this_is_when_three()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "this is then three",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.this_is_then_three()"
});
formatter.result({
  "status": "passed"
});
});