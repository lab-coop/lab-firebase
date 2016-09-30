Feature: Password Auth

  Scenario: Login With Correct Email and Password
    When I login with email "erik.wyatt@lab.coop" and password "erik.wyatt"
    Then the signed in user's email should be "erik.wyatt@lab.coop"
