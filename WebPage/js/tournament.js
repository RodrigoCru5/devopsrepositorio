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
var scontAmP = "";
var scontjugoles="";
var scontAmG = "";
var vcontAmG=0;
var vcontAmP=0;
var vcontBPac=0;
var stringDispLig = "";
var stringDispLigNext1 = "";
var stringDispLigNext2 = "";
var stringDispLigNext3 = "";
var x = 0;
var z = 0;
var aLigOctA1 = new Array(2);
var aLigOctA2 = new Array(2);
var aLigOctB1 = new Array(2);
var aLigOctB2 = new Array(2);
var aLigSemf1 = new Array(2);
var aLigSemf2 = new Array(2);
var aLigFinal = new Array(2);
var vCampeon;
var vptsA=0;
var mpoints = new Array(4);
var mgolesjugador = new Array(3);
var mpointsB = new Array(2);
var aEstksEquip = new Array(8);
var vA;
var vB;
var cont=0;
var g=0;


    
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

//Team names 8
var teamsArray8 = [];
    
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

//Array de goles
var golesJug = new Array(90);
for(index1 = 0; index1<90;index1++){
    golesJug[index1]=0;
}

//Matriz de goleo
var goleoCompleto = new Array(90);
for(var i = 0; i < 90; i++)
    goleoCompleto[i] = new Array(3);

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

function getOctFn(){
    aLigOctA1[0]=teamsArray8[0];
    aLigOctA1[1]=teamsArray8[7];
    aLigOctA2[0]=teamsArray8[2];
    aLigOctA2[1]=teamsArray8[5];
    aLigOctB1[0]=teamsArray8[3];
    aLigOctB1[1]=teamsArray8[4];
    aLigOctB2[0]=teamsArray8[1];
    aLigOctB2[1]=teamsArray8[6];
}

function getSemf(){
    aLigSemf1[0]= aLigOctA1[getRndInteger()];
    aLigSemf1[1]= aLigOctA2[getRndInteger()];
    aLigSemf2[0]= aLigOctB1[getRndInteger()];
    aLigSemf2[1]= aLigOctB2[getRndInteger()];
}

function getFinal(){
    aLigFinal[0]= aLigSemf1[getRndInteger()];
    aLigFinal[1]= aLigSemf2[getRndInteger()];
}

function getCamp(){
    vCampeon= aLigFinal[getRndInteger()];
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
    vA=resultTeamA;
    vB=resultTeamB;
	for(index = 0; index < 5; index ++)
	{
		if(teamAGoals[index] != 0){
		   stringDisplay += ("<br>"+teamANames[index]+" "+teamAGoals[index]);
           golesJug[(index1 * 5) + index]++;
        }
    }
	stringDisplay += ("<br>Anotadores "+teamB+": ");
	for(index = 0; index < 5; index ++)
	{
		if(teamBGoals[index] != 0){
			stringDisplay += ("<br>"+teamBNames[index]+" "+teamBGoals[index]);
            golesJug[(index2 * 5) + index]++;
        }
    }
}

//***** Estadisticas-> puntos y goles...mas*****
function inicEstEquip(){
    var f;
    for (f=0;f<18;f++){
        aEstksEquip[f]=new Array(18);
        aEstksEquip[f][0]=teamsArray[f];  //EQUIPO
        aEstksEquip[f][1]=17;              //JugJug
        aEstksEquip[f][2]=0;              //PUNTOS
		aEstksEquip[f][3]=0;              //GANADOS
		aEstksEquip[f][4]=0;              //EMPATADOS
        aEstksEquip[f][5]=0;              //PERDIDOS
        aEstksEquip[f][6]=0;              //GOLES
        aEstksEquip[f][7]=0;              //GOLES EN CONTRA
        aEstksEquip[f][8]=0;              //DIFERENCIAS DE GOLES = GF-GC
        
    }
}

function impEstEquip(){
    var k;
    var scontAmG3="";
    scontAmG3 = ("<br>**** TABLA DE ESTADISTICAS GENERALES ****");
    scontAmG3 += ("<br>Equipo:."+".........JugJug:"+".........Puntos:"+".......Ganads:"+"......Empats:"+
            ".......Perdids:"+".......Goles:"+"......GlsCnt:"+"......DifGls:"+"<br>");
    for (k=0;k<18;k++){
        scontAmG3 += ("<br>"+aEstksEquip[k][0]+"............."+aEstksEquip[k][1]+
		    "............."+aEstksEquip[k][2]+"............."+aEstksEquip[k][3]+
            "............."+aEstksEquip[k][4]+"............."+aEstksEquip[k][5]+
            "............."+aEstksEquip[k][6]+"............."+aEstksEquip[k][7]+
            "............."+aEstksEquip[k][8]);
    }
}


//*****liguilla*****
function addOctFn(){
	document.getElementById("dg-cuart1").innerHTML = aLigOctA1[0];
	document.getElementById("dg-cuart2").innerHTML = aLigOctA1[1];
	document.getElementById("dg-cuart3").innerHTML = aLigOctA2[0];
	document.getElementById("dg-cuart4").innerHTML = aLigOctA2[1];
	document.getElementById("dg-cuart5").innerHTML = aLigOctB1[0];
	document.getElementById("dg-cuart6").innerHTML = aLigOctB1[1];
	document.getElementById("dg-cuart7").innerHTML = aLigOctB2[0];
	document.getElementById("dg-cuart8").innerHTML = aLigOctB2[1];
}

function addSemf(){
	document.getElementById("dg-semi1").innerHTML = aLigSemf1[0];
	document.getElementById("dg-semi2").innerHTML = aLigSemf1[1];
	document.getElementById("dg-semi3").innerHTML = aLigSemf2[0];
	document.getElementById("dg-semi4").innerHTML = aLigSemf2[1];
}

function addFinal(){
	document.getElementById("dg-final1").innerHTML = aLigFinal[0];
	document.getElementById("dg-final2").innerHTML = aLigFinal[1];
}

function addCamp(){
	document.getElementById("dg-campeon").innerHTML = vCampeon;
}


//*****RUN SIMULATION OF MATCHES*****
function startTournament(){

    inicEstEquip();
    
	for(index1 = 0; index1 < 18; index1 ++)
	{
        mpoints[index1]=new Array(18);
		for(index2 = index1 + 1; index2 < 18; index2++) 
		{
			getData(index1, index2);
			simulateMatch();
			concatenateResults();
            
            if(vA > vB ){              
                aEstksEquip[index1][2]+=3;
                aEstksEquip[index1][3]+=1;
                aEstksEquip[index2][5]+=1; 
            }
               
            else if(vA == vB ){                
                aEstksEquip[index1][2]+=1;                               
                aEstksEquip[index2][2]+=1;
				aEstksEquip[index1][4]+=1;                               
                aEstksEquip[index2][4]+=1;
            }
            else {             
                aEstksEquip[index2][2]+=3;
                aEstksEquip[index2][3]+=1;
                aEstksEquip[index1][5]+=1;                
                
            }
			aEstksEquip[index1][6]+=vA;                               
            aEstksEquip[index2][6]+=vB; 
            aEstksEquip[index1][7]+=vB;
            aEstksEquip[index2][7]+=vA;
            aEstksEquip[index1][8]= aEstksEquip[index1][6] - aEstksEquip[index1][7];
            aEstksEquip[index2][8]= aEstksEquip[index2][6] - aEstksEquip[index2][7];
		}
		
		saveTableData();
	}
    impEstEquip();
    tablaGoleo();
    getTeamData(); 
	getPlayerData();
}


function tablaGoleo(){
    var n;
    var vgoles=0;
        for(index=0;index<90;index ++){
            scontjugoles += ("<br>Jugador - "+playersArray[index]+" " + teamsArray[Math.floor(index/5)] + " " + golesJug[index]+" goles" );
            goleoCompleto[index][0] = playersArray[index];
            goleoCompleto[index][1] = golesJug[index];
            goleoCompleto[index][2] = teamsArray[Math.floor(index/5)];
			savePlayerData();
        } 
}

//*****RUN liguilla*****
function startLiguilla(){
	getOctFn ();
	addOctFn();    
}

//*****Next...*****
function ligNext(){
    x++;
    if (x == 1) {
        getSemf();
        addSemf(); 
    }
    if (x== 2) {
        getFinal();
        addFinal();
    }
    if (x == 3) {
        getCamp();
        addCamp();
    }
}

//*****CALLING SUM FUNCTION*****
var resultTeamA = teamAGoals.reduce(matchResult, 0);
var resultTeamB = teamBGoals.reduce(matchResult, 0);

//*****RESET FUNCTION*****	
function reset(){
    x=0;
	var tableIndex;
    stringDisplay="";
    scontAmG3="";
    scontjugoles="";
    stringDispLig="";
    stringDispLigNext1="";
    stringDispLigNext2="";
    stringDispLigNext3="";
	teamsArray8 = [0, 0, 0, 0, 0, 0, 0, 0];
	for(tableIndex = 19; tableIndex > 1; tableIndex --){
		document.getElementById("tab-gral").deleteRow(tableIndex);
	}
	
	for(tableIndex = 6; tableIndex > 1; tableIndex --){
		document.getElementById("tab-goleo").deleteRow(tableIndex);
	}
	resetDatabase();
}

//*****Saving one team data to DB*****
function saveTableData(){
	//API Url
	var Url = "https://4d6q7b1e85.execute-api.us-east-2.amazonaws.com/prod/team";
	//Http Request
	var xhr = new XMLHttpRequest();
	//Object for make json
	var obj = new Object();
	obj.teamId = index1 + 1;
	obj.gf = aEstksEquip[index1][6];
	obj.gc = aEstksEquip[index1][7];		
	obj.win = aEstksEquip[index1][3];
	obj.lose = aEstksEquip[index1][5];
	obj.tie = aEstksEquip[index1][4];
	obj.points = aEstksEquip[index1][2];
	xhr.open('POST', Url, true);
	xhr.send(JSON.stringify(obj));
}

//*****Saving goals score to DB*****
function savePlayerData(){
	//API Url
	var Url = "https://4d6q7b1e85.execute-api.us-east-2.amazonaws.com/prod/player";
	//Http Request
	var xhr = new XMLHttpRequest();
	//Object for make json
	var obj = new Object();
	obj.idJugador = index + 1;
	obj.goles = golesJug[index];	
	xhr.open('POST', Url, true);
	xhr.send(JSON.stringify(obj));
}

//*****Get teams data from DB*****
function getTeamData(){
	//API Url
	var Url = "https://4d6q7b1e85.execute-api.us-east-2.amazonaws.com/prod/team";
	//Http Request
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4 && xhr.status==200){
			response = JSON.parse(xhr.responseText);
			appendTeamJson(response);// pass the json object to the append_json function
		}
	}	
	xhr.open('GET', Url, true);
	xhr.send();
	
}

//this function appends the general table data to the html table 
function appendTeamJson(data){
	var table = document.getElementById('tab-gral');
	var counter = 0;
	for (counter = 0; counter < 18; counter ++){
		var tr = document.createElement('tr');
		tr.setAttribute("id", counter);
		tr.innerHTML = '<td>' + (counter + 1) + '</td>' +
		'<td>' + data[counter].Nombre_equipo + '</td>' +
		'<td>17</td>' +
		'<td>' + data[counter].POINTS + '</td>' +
		'<td>' + data[counter].WIN + '</td>' +
		'<td>' + data[counter].TIE + '</td>' +
		'<td>' + data[counter].LOSE + '</td>' +
		'<td>' + data[counter].GF + '</td>' +
		'<td>' + data[counter].GC + '</td>' +
		'<td>' + data[counter].DIF + '</td>';
		table.appendChild(tr);
		if (counter < 8){
			teamsArray8[counter] = data[counter].Nombre_equipo;
		}
	}
}

function getPlayerData(){
	//API Url
	var Url = "https://4d6q7b1e85.execute-api.us-east-2.amazonaws.com/prod/player";
	//Http Request
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4 && xhr.status==200){
			console.log(xhr.response);
			response = JSON.parse(xhr.responseText);
			appendPlayerJson(response);// pass the json object to the append_json function
		}
	}	
	xhr.open('GET', Url, true);
	xhr.send();
}

//this function appends the goals by player table json data to the html table 
function appendPlayerJson(data){
	var table = document.getElementById('tab-goleo');
	var counter = 0;
	for (counter = 0; counter < 5; counter ++){
		var tr = document.createElement('tr');
		tr.setAttribute("id", counter);
		tr.innerHTML = '<td>' + data[counter].Nombre + '</td>' +
		'<td>' + data[counter].Equipo + '</td>' +
		'<td>' + data[counter].Goles + '</td>';
		table.appendChild(tr);
	}
}

//*****Reset DB*****
function resetDatabase(){
	//API Url
	var Url = "https://4d6q7b1e85.execute-api.us-east-2.amazonaws.com/prod/reset";
	//Http Request
	var xhr = new XMLHttpRequest();
	//Object for make json
	var obj = new Object();
	obj.action = "reset";
	xhr.open('POST', Url, true);
	xhr.send(JSON.stringify(obj));
}