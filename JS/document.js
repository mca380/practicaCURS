$(document).ready(function() {
    $("#formulari").submit(function(evento){
        var dataInici = new Date($('#dataInici').val());
        var dataFi = new Date($('#dataFi').val()); 
        var veureData = dataInici.getDate() +'/'+(dataInici.getMonth()+1)+'/'+dataInici.getFullYear();
        function calcData(dataInici, dataFi) {//Funció que ens calcula els dies que hi ha entre la data d'inici i la data de fi del curs.
            return Math.round((dataInici-dataFi)/(1000*60*60*24));
    }
        var dies = calcData(dataInici,dataFi);//El resultat de la funció anterior el guardam dins la variable per a després poder mostrar els dies.
    
        if(dataInici < dataFi){
            var novaFila = $("<tr><td>"+$("#nomCurs").val()+"</td><td>"+$("#tipusCurs").val()
            +"</td><td>"+$("#nomProfessor").val()+"</td><td>"+veureData+"</td><td>"+dies+"</td><td>"+$("#hores").val()+"</td></tr>");
            novaFila.appendTo("#cosTaula"); 
            $("#formulari")[0].reset();//Si no posam aquesta funció, un cop introduït un alumne, el formulari segueix amb les dades. Si la posem, per a cada alumne, ens apareixerà el formulari en blanc. 
        }else{
            alert("La data de fi ha de ser major que la data d'inici"); 
            
            return false;
        }
    })
});

