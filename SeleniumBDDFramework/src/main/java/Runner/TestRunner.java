package Runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
		features = "src/test/java/Features", 
		glue = {"StepDefinitions"}, 
		monochrome = true, 
		plugin = {"pretty", "html:cucumberReport" ,
                "json:cucumberReport/cucumber.json", "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}
//		tags = {"@Smoke,@Regression","~@Sanity"}
		)
public class TestRunner {

	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass (alwaysRun = true)
	public void setUp() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test (groups = "cucumber", description = "Run Cucumber Test", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass (alwaysRun = true)
	public void tearDown() {
		testNGCucumberRunner.finish();
	}
}
