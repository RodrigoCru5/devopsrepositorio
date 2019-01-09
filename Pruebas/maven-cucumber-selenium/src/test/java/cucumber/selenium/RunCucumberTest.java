package cucumber.selenium;

import java.io.File;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

@RunWith(Cucumber.class)
//@CucumberOptions(plugin = {"pretty"})
/*
@CucumberOptions(
        features ="src/test/resources/cucumber/selenium"
        ,glue= "src/test/java/cucumber.selenium",
        plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}, 
        monochrome = true
                )*/
@CucumberOptions(strict = false, features = "src/test/resources/cucumber/selenium",
	glue = { "pretty"})
public class RunCucumberTest {
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    
    }
}
