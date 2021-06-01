package com.bdd.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {

    @Given("^this is given statement one$")
    public void this_is_given_statement_one()  {
        System.out.println("given one");
    }

    @When("^this is when one$")
    public void this_is_when_one() {
        System.out.println("when one");
    }

    @Then("^this is then one$")
    public void this_is_then_one()  {
        System.out.println("then one");
    }

    @Given("^this is given statement two$")
    public void this_is_given_statement_two(){
        System.out.println("given two");
    }

    @When("^this is when two$")
    public void this_is_when_two() {
        System.out.println("when two");
    }

    @Then("^this is then  two$")
    public void this_is_then_two()  {
        System.out.println("then two");
    }

    @Given("^this is given statement three$")
    public void this_is_given_statement_three()  {
        System.out.println("given three");
    }

    @When("^this is when three$")
    public void this_is_when_three()  {
        System.out.println("when three");

    }

    @Then("^this is then three$")
    public void this_is_then_three()  {
        System.out.println("then three");
    }


    @Given("^this is given statement three$")
    public void this_is_given_statement_three_2()  {
        try{
            int a= 4/0;
            sop("shilpa");
        }
        catch(Exception e){
            sop("hi");
        }

        catch(ArithematicException e){
            sop("hello");
        }
    }



    // new comment

}
