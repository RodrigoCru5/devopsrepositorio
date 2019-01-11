$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumber/selenium/ligaMx.feature");
formatter.feature({
  "name": "Liga Thincode-MX",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SimulationTest"
    }
  ]
});
formatter.scenario({
  "name": "Comenzar la simulacion de los juegos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@FunctionalTest-1"
    }
  ]
});
formatter.step({
  "name": "I open the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.i_open_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button Jugar",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.i_click_on_button_Jugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display tables of contents and button Liguilla",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_tables_of_contents_and_button_Liguilla()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ver equipos en cuartos de final de Liguilla",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@FunctionalTest-2"
    }
  ]
});
formatter.step({
  "name": "I click on button Liguilla",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_click_on_button_Liguilla()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display diagram quarter of end and button Siguiente",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_diagram_quarter_of_end_and_button_Siguiente()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ver equipos en semifinal de Liguilla",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@FunctionalTest-3"
    }
  ]
});
formatter.step({
  "name": "I click one on button Siguiente",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_click_one_on_botton_Siguiente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display in the diagram the next Teams of semifinal",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_in_the_diagram_the_next_Teams_of_semifinal()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ver equipos finalistas de Liguilla",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@FunctionalTest-4"
    }
  ]
});
formatter.step({
  "name": "I click two on button Siguiente",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_click_two_on_botton_Siguiente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display in the diagram the next Teams of end",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_in_the_diagram_the_next_Teams_of_end()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Ver equipo campion de Liguilla y reinicio de simulacion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@FunctionalTest-5"
    }
  ]
});
formatter.step({
  "name": "I click three on button Siguiente",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_click_three_on_botton_Siguiente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display in the diagram the Champion Team",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_in_the_diagram_the_Champion_Team()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click four on button Siguiente",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.I_click_four_on_button_Siguiente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display congratulations for the Team",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.display_congratulations_for_the_Team()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button Reset",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_click_on_button_Reset()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display the start the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.display_the_start_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "No debe mostrar tabas de contenido de la simulacion en el inicio de la pagina",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@RegressionTest-1"
    }
  ]
});
formatter.step({
  "name": "I new open the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.I_new_open_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the start the page not display tables of contents and button Liguilla",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.the_start_the_page_not_display_tables_of_contents_and_button_Liguilla()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "No se debe mostrar contenido de la Liguilla cuando de da clic en el boton Jugar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SimulationTest"
    },
    {
      "name": "@RegressionTest-2"
    }
  ]
});
formatter.step({
  "name": "I new click on botton Jugar",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.I_new_click_on_botton_Jugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "not display diagram of Liguilla and button Siguiente",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.not_display_diagram_of_Liguilla_and_button_Siguiente()"
});
formatter.result({
  "status": "passed"
});
});