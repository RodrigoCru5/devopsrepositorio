//JavaScript-C24.2.0 (SpiderMonkey)
//*****VARIABLES*****
var teamA;
var teamB;
var teamANames = new Array(5);
var teamAGoals = new Array(5);
var teamBNames = new Array(5);
var teamBGoals = new Array(5);
var index;
var index1;
var index2;
var statisticTable = new Array(18);
var playerGoals = new Array(90);
var stringDisplay = "";


//*****ARRAYS*****

//Team names
var teamsArray = [
	"Am&eacute;rica",
	"Pumas",
	"Chivas",
	"Cruz Azul",
	"Toluca",
	"Tigres",
	"Monterrey",
	"Santos",
	"Puebla",
	"Veracruz",
	"Atlas",
	"Lobos BUAP",
	"Necaxa",
	"Quer&eacute;taro",
	"Le&oacute;n",
	"Tijuana",
	"Morelia",
	"Pachuca"];

//Player names
var playersArray = [
	"C. Dom&iacute;nguez", "O. Peralta", "D. Lainez", "H. Martin", "R. Mart&iacute;nez",            //Am&eacute;rica
	"C. Gonz&aacute;lez", "P. Barrera", "D. Cabrera", "F. Mora", "M. Rodr&iacute;guez",            //Pumas
	"O. Pineda", "A. Pulido", "J. L&oacute;pez", "C. Cisneros", "I. Brizuela",              //Chivas
	"M. Cauteruccio", "E. Hern&aacute;ndez", "R. Alvarado", "E. M&eacute;ndez", "M. Caraglio",     //CruzAzul
	"R. Sambueza", "A. Vega", "L. Qui&ntilde;ones", "E. Triverio", "C. Borja",              //Toluca
	"E. Vargas", "A. Gignac", "J. Aquino", "E. Valencia", "J. Damm",                 //Tigres
	"R. Fun&eacute;s", "D. Pab&oacute;n", "J. Gallardo", "R. Pizarro", "A. Hurtado",               //Monterrey 
	"J. Furch", "O. Mart&iacute;nez", "J. Rodr&iacute;guez", "B. Lozano", "J. V&aacute;zquez",            //Santos
	"A. Chumacero", "L. Cavallini", "J. Espericueta", "F. Acu&ntilde;a", "C. Tab&oacute;",         //Puebla
	"C. Men&eacute;ndez", "W. Cartagena", "J. Paganoni", "D. Villalba", "A. Luna",          //Veracruz
	"R. &Aacute;lvarez", "L. Reyes", "J. Vig&oacute;n", "A. Andrade", "B. Garnica",                //Atlas
	"M. Lainez", "A. Gonz&aacute;lez", "B. Rabello", "L. Ramos", "D. Jim&eacute;nez",              //Lobos BUAP
	"V. D&aacute;vila", "D. Villalpando", "M. Fern&aacute;ndez", "B. Fern&aacute;ndez", "L. Gallegos",    //Necaxa
	"C. Sanvezzo", "E. Puch", "M. Ruiz", "M. Britos", "J. Güemez",                   //Quer&eacute;taro
	"M. Boselli", "J. Cornejo", "O. Rodr&iacute;guez", "L. Montes", "A. Mej&iacute;a",             //Le&oacute;n
	"M. Bola&ntilde;os", "J. Lucero", "E. Castillo", "E. Torres", "D. Hern&aacute;ndez",           //Tijuana 
	"C. Fierro", "E. Flores", "R. Sandoval", "I. &Aacute;vila", "D. Vald&eacute;s",                //Morelia
	"V. Guzm&aacute;n", "L. Ulloa", "F. Jara", "S. P&eacute;rez", "A. Sagal"                       //Pachuca
];

//Statistics Array
for (index1 = 0; index1 < statisticTable.length; index1++) {
  statisticTable[index1] = new Array(8);
	for(index2 = 0; index2 < statisticTable[index1].length; index2++) {
		if( index2 == 0 ) {
			statisticTable[index1][index2] = teamsArray[index1];
		} else {
			statisticTable[index1][index2] = 0;
		}
		
	}
}


//*****GET DATA FROM ARRAYS*****
function getData (indexTeamA, indexTeamB){
	var i;
	var j;
	teamA = teamsArray[indexTeamA];
	teamB = teamsArray[indexTeamB];
	for (i = indexTeamA * 5, j = 0; i < indexTeamA * 5 + 5; i ++, j ++){
		teamANames[j] = playersArray[i];
	}
	for (i = indexTeamB * 5, j = 0; i < indexTeamB * 5 + 5; i ++, j ++){
		teamBNames[j] = playersArray[i];
	}
}

//*****SIMULATE MATCH*****
function simulateMatch()
{
	teamAGoals = [0, 0, 0, 0, 0];
	teamBGoals = [0, 0, 0, 0, 0];
	
	for (index = 0; index < 5; index++) 
	{
		teamAGoals[index] = getRndInteger();
		teamBGoals[index] = getRndInteger();
	} 
}


//*****GET RANDOM NUMBER*****
function getRndInteger() 
{
  return Math.floor(Math.random() * 2);
}


//*****PLAYERS GOALS SUM*****
function matchResult(a, b) {
	return a + b;
}

//*****PRINTING FUNCTIONS*****
function concatenateResults(){ 
	var resultTeamA = teamAGoals.reduce(matchResult, 0);
	var resultTeamB = teamBGoals.reduce(matchResult, 0);
	stringDisplay += ("<br><br>**********Resultado**********<br>"+teamA+": "+resultTeamA+"     "+teamB+": "+resultTeamB);
	stringDisplay += ("<br>Anotadores "+teamA+": ");
	for(index = 0; index < 5; index ++)
	{
		if(teamAGoals[index] != 0)
		   stringDisplay += ("<br>"+teamANames[index]+" "+teamAGoals[index]);
	}

	stringDisplay += ("<br>Anotadores "+teamB+": ");
	for(index = 0; index < 5; index ++)
	{
		if(teamBGoals[index] != 0)
			stringDisplay += ("<br>"+teamBNames[index]+" "+teamBGoals[index]);
	}
}


//*****RUN SIMULATION OF MATCHES*****
function startTournament(){
	for(index1 = 0; index1 < 18; index1 ++)
	{
		for(index2 = index1 + 1; index2 < 18; index2++) 
		{
			getData(index1, index2);
			simulateMatch();
			concatenateResults();
		}
	}
	document.getElementById("resultado").innerHTML = stringDisplay;
}

//*****CALLING SUM FUNCTION*****
var resultTeamA = teamAGoals.reduce(matchResult, 0);
var resultTeamB = teamBGoals.reduce(matchResult, 0);

	