
    let modal_pop = document.getElementById("v_modal");
    let btn_abrir = document.getElementById("abrir_m");
    let btn_cerrar = document.getElementById("cerrar_m");


    
    btn_abrir.addEventListener("click", function() {
        modal_pop.style.display = "block";
    })
    
    
    function funcion_modal(){
        let d_nombre = document.getElementById("nombre").value;
        //btn_cerrar.addEventListener("click",function() {
        modal_pop.style.display = "none";
        if(d_nombre==""){
            document.getElementById("saludando").innerHTML = "🔥 Hola 🔥";
            console.log("No se encontró la información");
            saludos.style.visibility = "visible";
        }else{
            document.getElementById("saludando").innerHTML = "🔥 Hola " + d_nombre + " 🔥";
            console.log(d_nombre);
            saludos.style.visibility = "visible";
        }
        
    //});
    }
      
      // Si el usuario hace click fuera de la ventana, se cierra.
    window.addEventListener("click",function(event) {
        if (event.target == modal_pop) {
            modal_pop.style.display = "none";
        }
    });

