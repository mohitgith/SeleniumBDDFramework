package util;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class HelperUtil {
	
	public static void takeScreenshot(WebDriver driver, String fileName) {
		TakesScreenshot takesScreenshot = ((TakesScreenshot)driver);
		File srcFile = takesScreenshot.getScreenshotAs(OutputType.FILE);
		File desFile = new File("./screenshots/" + fileName + ".png");
		try {
			FileUtils.copyFile(srcFile, desFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
