$(document).ready(function(){
    $("#btn").click(function(e){
        validar(e);
       
        
    });
    
});

function validar(e){
    e.preventDefault(e);
    $("#mensaje").empty();
    let input = $("#formulario").val();
    if(input == ""){
        $("#formulario").removeClass();
        $("#mensaje").removeClass();
        $("#formulario").addClass("rojo");
        $("#mensaje").append("<p>No puede estar vacio</p>");
        $("#mensaje").addClass("rojoText");
    }
    
    if(input.length > 2 && input.length < 11){
        $("#formulario").removeClass();
        $("#mensaje").removeClass();
        $("#formulario").addClass("verde");
        $("form").submit();
        alert("Formulario enviado correctamente");
    } 

    if(input.length < 3 && input.length > 0 || input.length > 10){
        $("#formulario").removeClass();
        $("#mensaje").removeClass();
        $("#formulario").addClass("naranja");
        $("#mensaje").append("<p>No puede ser menor a 3 caracteres, ni superar los 10 caracteres</p>");
        $("#mensaje").addClass("naranjaText");
    } 



    

}