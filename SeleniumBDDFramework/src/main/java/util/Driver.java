package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import config.CommonProperties;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Driver {

//	private static Logger log = LogManager.getLogger(Driver.class);
	static WebDriver driver = null;
	static String browserName = CommonProperties.getTestConfigProp("browser");
	
	//https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
	static DesiredCapabilities cap = new DesiredCapabilities();

	public static WebDriver setBrowser() {
		//Automated approach to setup the driver using WebdriverManager
//		System.out.println("Browser Name : " + browserName);
		System.out.println("Setting the browser : " + browserName.toUpperCase());
		switch (browserName.toLowerCase()) {
		case "chrome":
			WebDriverManager.chromedriver().setup();
			driver  = new ChromeDriver();
			System.out.println("Driver Initated ChromeDriver()");
			break;
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			driver  = new FirefoxDriver();
			System.out.println("Driver Initated FirefoxDriver()");
			break;
		case "ie":
			WebDriverManager.iedriver().setup();
			cap.setCapability("ignoreProtectedModeSettings", true);
			driver  = new InternetExplorerDriver(cap);
			System.out.println("Driver Initated InternetExplorerDriver()");
			break;
		case "edge":
			WebDriverManager.edgedriver().setup();
			driver  = new EdgeDriver();
			System.out.println("Driver Initated EdgeDriver()");
			break;
		default:
			WebDriverManager.chromedriver().setup();
			driver  = new ChromeDriver();
			System.out.println("Driver Initated ChromeDriver() from default");
			break;
		}
		return driver;
	}
	
	public static void closeBrowser() {
		driver.close();
		if (browserName.equalsIgnoreCase("chrome")) {
			driver.quit();
		}
	}
}
