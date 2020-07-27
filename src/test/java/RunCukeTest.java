import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(


        features = "classpath:featurefiles",
        glue = "com.bdd.StepDefinitions",
        monochrome = true,
        snippets = SnippetType.CAMELCASE,
        tags = {"@Sanity" }, strict = false, dryRun = false, plugin = { "pretty", "timeline:target/cucumber-parallel-report","html:target/cucumber-reports",
        "json:target/cucumber-reports/Cucumber.json"
}

)

public class RunCukeTest  {


}
