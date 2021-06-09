package StepDefinitions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.He;
import util.Driver;
import util.HelperUtil;

public class AutomationPracticeSteps {
	
	WebDriver driver = null;

	@Given("^user is on automation practice page$")
	public void user_is_on_automation_practice_page() throws Throwable {
		driver = Driver.setBrowser();
		System.out.println("Launching Browser...");
//		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		System.out.println("Opening the url");	    
	}

	@When("^user clicks on the \"([^\"]*)\"$")
	public void user_clicks_on_the(String radiobutton) throws Throwable {
	    WebElement radioButton1 = driver.findElement(By.xpath("//input[@value=\"radio1\"]"));
	    WebElement radioButton2 = driver.findElement(By.xpath("//input[@value=\"radio2\"]"));
	    WebElement radioButton3 = driver.findElement(By.xpath("//input[@value=\"radio3\"]"));
	    
	    switch (radiobutton.toLowerCase()) {
		case "radiobutton1":
			System.out.println("Clicking on Radio Button 1");
			radioButton1.click();
			break;
		case "radiobutton2":
			System.out.println("Clicking on Radio Button 2");
			radioButton2.click();
			break;
		case "radiobutton3":
			System.out.println("Clicking on Radio Button 3");
			radioButton3.click();
			break;
		default:
			System.out.println("Clicking on Default Radio Button");
			radioButton2.click();
			break;
		}
	}

	@Then("^user select the \"([^\"]*)\" from the dropdown$")
	public void user_select_the_from_the_dropdown(String option) throws Throwable {
		Select dropDown = new Select(driver.findElement(By.id("dropdown-class-example")));
		System.out.println("IS MULTIPLE : " + dropDown.isMultiple());
//		dropDown.selectByVisibleText(option);
		dropDown.selectByValue(option);
	}
	
	@When("^user clicks on Switch Window Button$")
	public void user_clicks_on_Switch_Window_Button() throws Throwable {
	    WebElement winButton = driver.findElement(By.id("openwindow"));
	    winButton.click();
	    
	    String mainWindow = driver.getWindowHandle();
	    System.out.println("Main Window : " + mainWindow);
	    Set<String> allWindowHandles = driver.getWindowHandles();
	    Iterator<String> iterator = allWindowHandles.iterator();
	    
	    while (iterator.hasNext()) {
			String childWindow = iterator.next();
			if (!mainWindow.equalsIgnoreCase(childWindow)) {
				driver.switchTo().window(childWindow);
				driver.manage().window().maximize();
				System.out.println("Child Window Title : " + driver.getTitle());
				System.out.println("Child Window URL : " + driver.getCurrentUrl());
				HelperUtil.takeScreenshot(driver, childWindow);
				driver.close();
				System.out.println("Child Window is closed");
			}
		}
//	    driver.switchTo().window(mainWindow);
	    
	}

	@When("^user clicks on Switch Tab Button$")
	public void user_clicks_on_Switch_Tab_Button() throws Throwable {
	    System.out.println("Tab");
	    WebElement tabButton = driver.findElement(By.id("opentab"));
	    tabButton.click();
	    
	    ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
	    driver.switchTo().window(tabs.get(1));
	    System.out.println("Page title of new tab: " + driver.getTitle());
	    Thread.sleep(5000);
	    driver.switchTo().window(tabs.get(0));
	    Thread.sleep(5000);
//	    driver.switchTo().window(tabs.remove(1));
//	    driver.close();
	    Thread.sleep(5000);
	}

	@When("^user clicks on Switch Alert Button$")
	public void user_clicks_on_Switch_Alert_Button() throws Throwable {
		System.out.println("alert");
	    driver.quit();
	}

	
}
