package cucumber.selenium;

import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdefs {
	public static WebDriver driver;
	String baseUrlUAT = "http://soccerbucketfortest.s3-website.us-east-2.amazonaws.com/index.html";
	
    @Given("^I open the page$")
    public void i_open_the_page() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        //System.setProperty("webdriver.gecko.driver","/Users/Documents/geckodriver");
    	WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrlUAT);
        Thread.sleep(2000);
        System.out.println("ejecuted the Given");
    }
    
    @And("^I click on botton Jugar$")
    public void i_click_on_botton_Jugar() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        //Busca el elemento
    	WebElement juagar = driver.findElement(By.id("btn-jugar"));
    	//Hacer clic en el botón "Jugar"
    	juagar.click();
    	System.out.println("ejecuted the And");
    }
    
    @Then("^display tables of contents and button Liguilla$")
    public void display_tables_of_contents_and_button_Liguilla() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        //Busca el elementos
    	Thread.sleep(3000);
    	driver.findElement(By.id("btn-liguilla"));
    	driver.findElement(By.id("tab-gral"));
    	driver.findElement(By.id("tab-goleo"));
    	//driver.findElement(By.xpath("//div[@class='row cont-btnliguilla']"));
    	//driver.findElement(By.xpath("//div[@id='div-tab-gral']/table[@id='tab-gral']"));
    	System.out.println("ejecuted the Then");
    	
    	driver.close();
    	driver.quit();
    }
    
}
