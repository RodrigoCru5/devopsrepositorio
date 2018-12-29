package selenium.demo.selenium.seleniumWebDriver;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.server.SeleniumServer;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;








import io.github.bonigarcia.wdm.*;
import junit.framework.TestCase;

public class TestSeleniumWD extends TestCase {
	protected WebDriver driver;
	boolean f;
	protected void setUp() throws Exception {
		super.setUp();
		//instancio el webdriver
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	protected void tearDown() throws Exception {
		super.tearDown();
		if (driver != null) {
            driver.quit();
        }
		
	}
	/*
	public void testOpenPage0()
	{		
		//Ejemplo de uso de selenium con la pagina de google
		//creo una variable de la url del buscador
		String url = "http://www.google.com";
		//abro el navegador
		driver.get(url);
		//me posiciono en searchbox
		//WebElement element = driver.findElement(By.name("q"));
		
		WebElement element = (new WebDriverWait(driver, 10))
				  .until(ExpectedConditions.presenceOfElementLocated(By.name("q")));
		isElementPresent("q");
		//le mando lo que quiero buscar
		element.sendKeys("selenium WebDriver");		
		//ejecuto el botón buscar
		element.submit();
		

	}*/
	public void testOpenPage1 () throws InterruptedException
	{	
		//Test 1 funcional
		
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);		
		//Localizar el boton por medio de su id.
		isElementPresent("btn-jugar");
		WebElement juagar = driver.findElement(By.id("btn-jugar"));
		//Hacer clic en el botón "Jugar"
		juagar.click();		

		//Validar si existe el elemento 
		isElementPresent("img-cargando");
		Thread.sleep(3000);
		isElementPresent("img-logo");		
		isElementPresent("tab-gral");
		isElementPresent("tab-goleo");
		isElementPresent("btn-liguilla");
	
		
		//driver.close();
	}

	public void testOpenPage2() throws InterruptedException
	{	
		//Test 2 funcional 
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		//Localizar el boton por medio de su id.
		WebElement juagar = (new WebDriverWait(driver, 60))
		  .until(ExpectedConditions.presenceOfElementLocated(By.id("btn-jugar")));		
		juagar.click();		
		//Validar si existe el elemento 
		isElementPresent("img-cargando");
		Thread.sleep(3000);
		WebElement liguilla = driver.findElement(By.id("btn-liguilla"));	
		liguilla.click();
		Thread.sleep(2000);
		//Validar si existe el elemento
		isElementPresent("tab-gral");
		isElementPresent("tab-goleo");
		isElementPresent("btn-liguilla");
		
		isElementPresent("btn-siguiente");
		isElementPresent("dg-cuart");
		isElementPresent("img-copa");
		
	}
	
	public void testOpenPage3() throws InterruptedException
	{	
		//Test 3 funcional
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		//Localizar el boton por medio de su id.
		WebElement juagar = (new WebDriverWait(driver, 60))
		  .until(ExpectedConditions.presenceOfElementLocated(By.id("btn-jugar")));		
		juagar.click();		
		//Validar si existe el elemento 
		isElementPresent("img-cargando");
		Thread.sleep(3000);
		WebElement liguilla = driver.findElement(By.id("btn-liguilla"));	
		liguilla.click();
		Thread.sleep(2000);		
		//Validar si existe el elemento
		isElementPresent("btn-siguiente");
		isElementPresent("dg-cuart");
		isElementPresent("img-copa");
		WebElement siguiente = driver.findElement(By.id("btn-siguiente"));		
		
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("semifinal");
		
	}
	public void testOpenPage4() throws InterruptedException
	{	
		//Test 4 funcional
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		//Localizar el boton por medio de su id.
		WebElement juagar = (new WebDriverWait(driver, 60))
		  .until(ExpectedConditions.presenceOfElementLocated(By.id("btn-jugar")));		
		juagar.click();		
		//Validar si existe el elemento 
		isElementPresent("img-cargando");
		Thread.sleep(3000);
		WebElement liguilla = driver.findElement(By.id("btn-liguilla"));	
		liguilla.click();
		Thread.sleep(2000);		
		//Validar si existe el elemento
		isElementPresent("btn-siguiente");
		isElementPresent("dg-cuart");
		isElementPresent("img-copa");
		WebElement siguiente = driver.findElement(By.id("btn-siguiente"));		
				
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("semifinal");		
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("dg-final");

	}
	
	public void testOpenPage5() throws InterruptedException
	{	
		//Test 5 funcional
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		//Localizar el boton por medio de su id.
		WebElement juagar = (new WebDriverWait(driver, 60))
		  .until(ExpectedConditions.presenceOfElementLocated(By.id("btn-jugar")));		
		juagar.click();		

        //Validar si existe el elemento 
		isElementPresent("img-cargando");
		Thread.sleep(3000);
		WebElement liguilla = driver.findElement(By.id("btn-liguilla"));	
		liguilla.click();
		Thread.sleep(2000);		
		//Validar si existe el elemento
		isElementPresent("btn-siguiente");
		isElementPresent("dg-cuart");
		isElementPresent("img-copa");
		WebElement siguiente = driver.findElement(By.id("btn-siguiente"));		
				
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("semifinal");		
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("dg-final");
		siguiente.click();
		Thread.sleep(2000);
		isElementPresent("dg-campeon");
		siguiente.click();  
		Thread.sleep(2000);
		isElementPresent("btn-reset");
		isElementPresent("img-festejo");
		WebElement reset = driver.findElement(By.id("btn-reset"));	
		reset.click();  
		Thread.sleep(2000);
	}

	
	public void testOpenPage6() throws InterruptedException
	{	
		//Test 6 de regreción 
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		Thread.sleep(2000);
		//Localizar por medio de su id.
		isElementPresent("tab-gral");
		isElementPresent("tab-goleo");

	}
	
	public void testOpenPage7() throws InterruptedException
	{	
		//Test 7 de regreción
		String baseUrl = "http://soccerbucketfordummies.s3-website.us-east-2.amazonaws.com/";
		//abro el navegador
		driver.get(baseUrl);
		Thread.sleep(2000);
		//Localizar por medio de su id.
		isElementPresent("btn-siguiente");
		isElementPresent("dg-cuart");
	}
	
	//Valiar si existe el elemento
	public void isElementPresent(String id) { 
		boolean isPresent = false;
		//WebElement disp = driver.findElement(By.id(id));
		WebElement disp = (new WebDriverWait(driver, 5000))
				  .until(ExpectedConditions.presenceOfElementLocated(By.id(id))); 
	    
	    if(disp.isDisplayed())
	    	isPresent=true; 

	    if (isPresent==true){
	    	System.out.println("isElementFound : true : "+id); 
	    }else{
	    	System.out.println("isElementFound : false : "+id); 
	    }
	     
	} 

 
}
