#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@SimulationTest
Feature: Liga Thincode-MX

	@FunctionalTest-1
  Scenario: Comenzar la simulacion de los juegos
    Given I open the page 
    And I click on button Jugar 
    Then display tables of contents and button Liguilla

  @FunctionalTest-2  
  Scenario: Ver equipos en cuartos de final de Liguilla
    #Given @TestFuncional-1 
    When I click on button Liguilla 
    Then display diagram quarter of end and button Siguiente
    
  @FunctionalTest-3 
  Scenario: Ver equipos en semifinal de Liguilla
    #Given @TestFuncional-1 and @TestFuncional-2
    When I click one on button Siguiente 
    Then display in the diagram the next Teams of semifinal
    
  @FunctionalTest-4 
  Scenario: Ver equipos finalistas de Liguilla
    #Given @TestFuncional-1, @TestFuncional-2 and @TestFuncional-3
    When I click two on button Siguiente 
    Then display in the diagram the next Teams of end  

  @FunctionalTest-5 
  Scenario: Ver equipo campion de Liguilla y reinicio de simulacion
    #Given @TestFuncional-1, @TestFuncional-2, @TestFuncional-3 and @TestFuncional-4
    When I click three on button Siguiente 
    Then display in the diagram the Champion Team  
    And I click four on button Siguiente
    And display congratulations for the Team
    When I click on button Reset
    Then display the start the page

	@RegressionTest-1
  Scenario: No debe mostrar tabas de contenido de la simulacion en el inicio de la pagina
    Given I new open the page  
    Then the start the page not display tables of contents and button Liguilla

	@RegressionTest-2
  Scenario: No se debe mostrar contenido de la Liguilla cuando de da clic en el boton Jugar
    #Given @RegressionTest-1   
    When I new click on botton Jugar  
    Then not display diagram of Liguilla and button Siguiente 

      