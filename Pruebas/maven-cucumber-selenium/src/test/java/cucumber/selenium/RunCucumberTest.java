package cucumber.selenium;

import java.io.File;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

@RunWith(Cucumber.class)

@CucumberOptions (features = "src/test/resources/cucumber/selenium",
		plugin = { "pretty", "html: target/cucumber-reports/report.html" }
)

public class RunCucumberTest {
    /*@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    
    }*/
}
