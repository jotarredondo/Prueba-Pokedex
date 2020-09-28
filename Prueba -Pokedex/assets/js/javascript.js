$(document).ready(function(){
    $("#respuesta").hide();
  });

  $("#botonin").click(function(){
    
    $("#respuesta").show(1000).slideDown(2000);
    consulta();
        
  });
 
  //Consulta a la api e impresión de Datos
  function consulta(){
    const pokemon = $('#valor').val();
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        dataType: 'json',
        success: function (dato) {
            $('#name').text("Nombre : " + dato.name);
            $('#number').text("Número : " + dato.id);
            $('#pokemonpng').attr("src", dato.sprites.front_default);
            //Impresión de tipo de pokemón - Alojados en carpeta assets
            var tipo = dato.types[0].type.name;
            $('#features').text("Tipo : " + tipo);
            if(tipo === "steel"){
              $('#tipopng').attr("src", "assets/img/tipo/tipoacero.png" )
            } ;
            if(tipo === "water"){
              $('#tipopng').attr("src", "assets/img/tipo/tipoagua.png" )
            } ;
            if(tipo === "bug"){
              $('#tipopng').attr("src", "assets/img/tipo/tipobicho.png" )
            } ;
            if(tipo === "dragon"){
              $('#tipopng').attr("src", "assets/img/tipo/tipodragon.png" )
            } ;
            if(tipo === "electric"){
              $('#tipopng').attr("src", "assets/img/tipo/tipoelectrico.png" )
            } ;
            if(tipo === "ghost"){
              $('#tipopng').attr("src", "assets/img/tipo/tipofantasma.png" )
            } ;
            if(tipo === "fire"){
              $('#tipopng').attr("src", "assets/img/tipo/tipofuego.png" )
            } ;
            if(tipo === "fairy"){
              $('#tipopng').attr("src", "assets/img/tipo/tipohada.png" )
            } ;
            if(tipo === "ice"){
              $('#tipopng').attr("src", "assets/img/tipo/tipohielo.png" )
            } ;
            if(tipo === "grass"){
              $('#tipopng').attr("src", "assets/img/tipo/tipohierba.png" )
            } ;
            if(tipo === "fighting"){
              $('#tipopng').attr("src", "assets/img/tipo/tipolucha.png" )
            } ;
            if(tipo === "normal"){
              $('#tipopng').attr("src", "assets/img/tipo/tiponormal.png" )
            } ;
            if(tipo === "dark"){
              $('#tipopng').attr("src", "assets/img/tipo/tipooscuro.png" )
            } ;
            if(tipo === "psychic"){
              $('#tipopng').attr("src", "assets/img/tipo/tipopsiquico.png" )
            } ;
            if(tipo === "rock"){
              $('#tipopng').attr("src", "assets/img/tipo/tiporoca.png" )
            } ;
            if(tipo === "ground"){
              $('#tipopng').attr("src", "assets/img/tipo/tipotierra.png" )
            } ;
            if(tipo === "poison"){
              $('#tipopng').attr("src", "assets/img/tipo/tipoveneno.png" )
            } ;
            if(tipo === "flying"){
              $('#tipopng').attr("src", "assets/img/tipo/tipovolador.png" )
            } ;

            //Guardar variables para ejecutar método canvas con parámetros
            var altura = parseInt(dato.height*10);
            $('#altura').text("Altura : " + altura + " cms");
            var peso = parseInt(dato.weight/10);
            $('#peso').text("Peso : " + peso + " kilos");
            var salud = parseInt(dato.stats[0].base_stat);
            var ataque = parseInt(dato.stats[1].base_stat);
            var defensa = parseInt(dato.stats[2].base_stat);
            var ataqueespecial = parseInt(dato.stats[3].base_stat);
            var defensaespecial = parseInt(dato.stats[4].base_stat);
            var velocidad = parseInt(dato.stats[5].base_stat);
            canvas(salud, ataque, defensa,ataqueespecial, defensaespecial,velocidad);
            
        }    
        //Revisión de estado en la consulta
    }).fail( function( jqXHR, textStatus, errorThrown ) {
      alert( 'Ingrese un número o nombre válido de Pokemón' );
    });
    // Incorporación de Canvas
    function canvas (salud, ataque,defensa,ataqueespecial,defensaespecial,velocidad) {
      var chart = new CanvasJS.Chart("canvasimg", {
        theme: "light2", 
        exportEnabled: true,
        animationEnabled: true, 	
        data: [
        {
          
          type: "pie",
          dataPoints: [
            { label: "Salud", y: salud},
            { label: "Ataque", y: ataque },
            { label: "Defensa", y: defensa },
            { label: "Ataque Especial", y: ataqueespecial},
            { label: "Defensa Especial", y: defensaespecial },
            { label: "Velocidad", y: velocidad }
          ]
        }
        ]
      });
      chart.render();
      }  
  }
//Incorporación suscripción
  $("#btnsuscripcion").click(function(){
    var nombreuser = $('#names').val();
    var correouser = $('#correo').val();
    const patron_nombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const patronemail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

      if (nombreuser == "" || !patron_nombre.test(nombreuser)){
        alert("Ingrese su nombre")
      }  
      else if(correouser == "" || !patronemail.test(correouser)){
        alert("Ingrese su correo electrónico")
      }
     else {
        alert("Bienvenido " + nombreuser + " su suscripción ha sido exitosa")
      }
  });



