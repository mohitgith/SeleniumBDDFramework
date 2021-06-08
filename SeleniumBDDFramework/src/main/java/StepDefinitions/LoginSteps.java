package StepDefinitions;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageClasses.GoogleSearchTest;
import util.Driver;
import util.HelperUtil;

public class LoginSteps {

	WebDriver driver = null;
	GoogleSearchTest googleSearchTestObj;
	String scnshot;

	@Given("^the browser is open$")
	public void the_browser_is_open() throws Throwable {
		driver = Driver.setBrowser();
		System.out.println("Launching Browser...");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		System.out.println("Implicit Wait for 20 seconds");
	}

	@When("^google search is open on the browser$")
	public void google_search_is_open_on_the_browser() throws Throwable {
		driver.get("https://www.google.com/");
		System.out.println("Opening the url");
	}

	@Then("^user enters \"([^\"]*)\"$")
	public void user(String ottplatform) throws Throwable {
		googleSearchTestObj =  new GoogleSearchTest(driver);
		googleSearchTestObj.enterTheTextInGoogleSearchBox(ottplatform);
		scnshot = ottplatform;
//		driver.findElement(By.name("q")).sendKeys(ottplatform);
		System.out.println("Entering the value in the textbox");
	}

	@Then("^user clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {
		googleSearchTestObj.clickOnGoogleSearchButton();
//		driver.findElement(By.name("btnK")).click();
		System.out.println("Clicking on the search button");
	}

	@Then("^user is search result$")
	public void user_is_search_result() throws Throwable {
		HelperUtil.takeScreenshot(driver, scnshot);
		System.out.println("Screenshot Taken!!!");
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();
		driver.quit();
	}
}