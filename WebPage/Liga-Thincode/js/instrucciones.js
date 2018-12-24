    function add(){
    var valor = document.getElementById("dg-campeon").innerHTML;
    document.getElementById("h2").innerHTML = valor;     
    }
    function cargando(){
      ocultar1();
      mostrar2();
      setTimeout(mostrar3,2000);
    }
    function cambiar(){
      document.getElementById("btn-siguiente").innerHTML = "Reset"; 
    }
    function cambiar2(){
      document.getElementById("btn-siguiente").innerHTML = "Siguiente"; 
    }
    function ocultar1(){
      document.getElementById("parte1").style.display = "none";
    }
    function ocultar2(){
      document.getElementById("parte2").style.display = "none";
    }
    function ocultar3(){
      document.getElementById("parte3").style.display = "none";
    }
    function ocultar4(){
      document.getElementById("parte4").style.display = "none";
    }
    function ocultar5(){
      document.getElementById("parte5").style.display = "none";
    }
    function mostrar1(){
      document.getElementById("parte1").style.display = "block";
    }
    function mostrar2(){
      document.getElementById("parte2").style.display = "block";
    }
    function mostrar3(){
      ocultar2();
      document.getElementById("parte3").style.display = "block";
    }
    function mostrar4(){
      document.getElementById("parte4").style.display = "block";
    }
    function mostrar5(){
      document.getElementById("parte5").style.display = "block";
    }
    function semifinal(){
      document.getElementById("dg-semi1").style.display = "block";
      document.getElementById("dg-semi2").style.display = "block";
      document.getElementById("dg-semi3").style.display = "block";
      document.getElementById("dg-semi4").style.display = "block";
    }

    function final(){
      document.getElementById("dg-final1").style.display = "block";
      document.getElementById("dg-final2").style.display = "block";
    }
    function campeon(){
      document.getElementById("dg-campeon").style.display = "block";
    }    
    
    function nonesemi(){
      document.getElementById("dg-semi1").style.display = "none";
      document.getElementById("dg-semi2").style.display = "none";
      document.getElementById("dg-semi3").style.display = "none";
      document.getElementById("dg-semi4").style.display = "none";
    }

    function nonefinal(){
      document.getElementById("dg-final1").style.display = "none";
      document.getElementById("dg-final2").style.display = "none";
    }
    function nonecampeon(){
      document.getElementById("dg-campeon").style.display = "none";
    }
    
    function jugar(){
      cargando();
      
    }
    function liguilla(){
      ocultar3();
      mostrar4();
    }
    function inicio(){
      ocultar5();
      mostrar1();
    }

    var i=0
    function siguiente() {
            i++;
            if (i == 1) {
                semifinal();
            }
            else if (i == 2)
            {
                final();
            }
            else if (i == 3){
                campeon();
                
            }    
            else if(i == 4){
                
                i = 0;                
                ocultar4();
                nonesemi();
                nonefinal();
                nonecampeon();
                mostrar5();
                add();
            }
    }
  
 