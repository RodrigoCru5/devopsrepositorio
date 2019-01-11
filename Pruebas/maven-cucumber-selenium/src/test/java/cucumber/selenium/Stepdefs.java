package cucumber.selenium;

import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	public static WebDriver driver;
	String baseUrlUAT = "http://soccerbucketfortest.s3-website.us-east-2.amazonaws.com/index.html";
/*	
@TestFuncional-1
Scenario: Comenzar la simulacion de los juegos
*/	
    @Given("^I open the page$")
    public void i_open_the_page() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver();
    	/*ChromeOptions options = new ChromeOptions();
    	options.addArguments("headless");
    	WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver(options);*/
    	
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        driver.get(baseUrlUAT);
        Thread.sleep(2000);
        System.out.println("ejecuted the @TestFuncional-1 - Given");
    }    
    @And("^I click on button Jugar$")
    public void i_click_on_button_Jugar() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        //Busca el elemento
    	WebElement juagar = driver.findElement(By.id("btn-jugar"));
    	//Hacer clic en el botón "Jugar"
    	juagar.click();
    	System.out.println("ejecuted the @TestFuncional-1 - And");
    }   
    @Then("^display tables of contents and button Liguilla$")
    public void display_tables_of_contents_and_button_Liguilla() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        //Busca el elementos
    	Thread.sleep(3000);
    	driver.findElement(By.id("btn-liguilla"));
    	driver.findElement(By.id("tab-gral"));
    	driver.findElement(By.id("tab-goleo"));
    	
    	System.out.println("ejecuted the @TestFuncional-1 - Then");
    	
    	
    }
/*    
@TestFuncional-2
Scenario: Ver equipos en cuartos de final de Liguilla
*/       
    @When("^I click on button Liguilla$")
    public void I_click_on_button_Liguilla() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement liguilla = driver.findElement(By.id("btn-liguilla"));
    	//Hacer clic en el botón "Liguilla"
    	liguilla.click();
    	System.out.println("ejecuted the @TestFuncional-2 - When");
    }    
    @Then("^display diagram quarter of end and button Siguiente$")
    public void display_diagram_quarter_of_end_and_button_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("btn-siguiente"));
    	driver.findElement(By.id("dg-cuartos"));    	
    	isElementPresent("dg-cuartos");
 	
    	System.out.println("ejecuted the @TestFuncional-2 - Then");
    	
    }
/*    
@TestFuncional-3
Scenario: Ver equipos en semifinal de Liguilla
*/    
    @When("^I click one on button Siguiente$")
    public void I_click_one_on_botton_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement siguiente = driver.findElement(By.id("btn-siguiente"));
    	//Hacer clic en el botón "Liguilla"
    	siguiente.click();
    	System.out.println("ejecuted the @TestFuncional-3 - When");
    }
    
    @Then("^display in the diagram the next Teams of semifinal$")
    public void display_in_the_diagram_the_next_Teams_of_semifinal() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("dg-semifinal"));    	
    	isElementPresent("dg-semifinal");
    	
    	System.out.println("ejecuted the @TestFuncional-3 - Then");
    }

/*    
@TestFuncional-4
Scenario: Ver equipos finalistas de Liguilla
*/    
    @When("^I click two on button Siguiente$")
    public void I_click_two_on_botton_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement siguiente = driver.findElement(By.id("btn-siguiente"));
    	//Hacer clic en el botón "Liguilla"
    	siguiente.click();
    	
    	System.out.println("ejecuted the @TestFuncional-4 - When");
    }
    
    @Then("^display in the diagram the next Teams of end$")
    public void display_in_the_diagram_the_next_Teams_of_end() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("dg-final"));
    	
    	isElementPresent("dg-final");
    	
    	System.out.println("ejecuted the @TestFuncional-4 - Then");
    }
    
/*    
@TestFuncional-5
Scenario: Ver equipo campion de Liguilla y reinicio de simulacion
*/    
    @When("^I click three on button Siguiente$")
    public void I_click_three_on_botton_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement siguiente = driver.findElement(By.id("btn-siguiente"));
    	//Hacer clic en el botón "Liguilla"
    	siguiente.click();
    	System.out.println("ejecuted the @TestFuncional-5 - When");
    }
    
    @Then("^display in the diagram the Champion Team$")
    public void display_in_the_diagram_the_Champion_Team() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	isElementPresent("dg-campeon");
    	driver.findElement(By.id("dg-campeon"));
    	driver.findElement(By.id("img-copa"));
       
    	System.out.println("ejecuted the @TestFuncional-5 - Then");
    }
    @And("^I click four on button Siguiente$")
    public void I_click_four_on_button_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement siguiente = driver.findElement(By.id("btn-siguiente"));
    	//Hacer clic en el botón "Liguilla"
    	siguiente.click();
    	
    	System.out.println("ejecuted the @TestFuncional-5 - And");
    }   
    @And("^display congratulations for the Team$")
    public void display_congratulations_for_the_Team() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("btn-reset"));
    	driver.findElement(By.id("img-festejo"));

    	System.out.println("ejecuted the @TestFuncional-5 - And");

    }
    @When("^I click on button Reset$")
    public void I_click_on_button_Reset() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement reset = driver.findElement(By.id("btn-reset"));
    	//Hacer clic en el botón "Liguilla"
    	reset.click();
    	System.out.println("ejecuted the @TestFuncional-5 - When");
    }    
    @Then("^display the start the page$")
    public void display_the_start_the_page() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("img-logo"));
    	driver.findElement(By.id("btn-jugar"));
    	driver.findElement(By.xpath("//div[@class='card text-center bienvenido']"));
    	
    	System.out.println("ejecuted the @TestFuncional-5 - Then");
    	driver.close();
    	driver.quit();
    }   

/*    
@RegressionTest-1
Scenario: No debe mostrar tabas de contenido de la simulacion en el inicio de la pagina
*/ 
 
    @Given("^I new open the page$")
    public void I_new_open_the_page() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver();
    	/*ChromeOptions options = new ChromeOptions();
    	options.addArguments("headless");
    	WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver(options);*/
    	
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        driver.get(baseUrlUAT);
        Thread.sleep(2000);
        System.out.println("ejecuted the @RegressionTest-1 - Given");
    }    
    @Then("^the start the page not display tables of contents and button Liguilla$")
    public void the_start_the_page_not_display_tables_of_contents_and_button_Liguilla() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("btn-liguilla"));
    	driver.findElement(By.id("tab-gral"));
    	driver.findElement(By.id("tab-goleo"));
    	isElementPresent("btn-liguilla");
    	isElementPresent("tab-gral");
    	isElementPresent("tab-goleo");
    	
    	System.out.println("ejecuted the @RegressionTest-1 - Then");
    }    
   
/*    
@RegressionTest-2
Scenario: No se debe mostrar contenido de la Liguilla cuando de da clic en el boton Jugar
*/ 
    
    @When("^I new click on botton Jugar$")
    public void I_new_click_on_botton_Jugar() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	//Busca el elemento
    	WebElement juagar = driver.findElement(By.id("btn-jugar"));
    	//Hacer clic en el botón "Jugar"
    	juagar.click();
    	System.out.println("ejecuted the @RegressionTest-2 - When");
    }    
    @Then("^not display diagram of Liguilla and button Siguiente$")
    public void not_display_diagram_of_Liguilla_and_button_Siguiente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
    	Thread.sleep(2000);
    	driver.findElement(By.id("btn-siguiente"));
    	driver.findElement(By.xpath("//div[@class='tournament-bracket tournament-bracket--rounded']"));
    	isElementPresent("btn-siguiente");
    	isElementPresent("dg-cuartos");
    	isElementPresent("dg-semifinal");
    	
        System.out.println("ejecuted the @RegressionTest-2 - Then");
    	driver.close();
    	driver.quit();
    }     
   

  //Valiar si existe el elemento mas a detalle
  	public void isElementPresent(String id) { 
  		boolean isPresent = false;
  		//WebElement disp = driver.findElement(By.id(id));
  		WebElement disp = (new WebDriverWait(driver, 5000))
  				  .until(ExpectedConditions.presenceOfElementLocated(By.id(id))); 
  	    
  	    if(disp.isDisplayed())
  	    	isPresent=true; 

  	    if (isPresent==true){
  	    	System.out.println(id); 
  	    	if(disp.getText()==null){
  	    		System.out.println("null :"+disp.getText()); 
  	    	}else{
  	    		System.out.println("Team : "+disp.getText()); 
  	    	}	 	    	
  	    }else{
  	    	System.out.println("isElementFound : false : "+id); 
  	    }
  	    
  	    System.out.println("**************"); 
  	     
  	} 
}
