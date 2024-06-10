function formatearNumero(num){
     //Formato aleman,utiliza la coma como separador decimal y el punto para los millares
     n = new Intl.NumberFormat("de-DE").format(num);
     return(n);
}
//============================================================================//
function mayusculas(e) {
    e.value = e.value.toUpperCase();
}
//============================================================================//
function estiloMillares(e){
     //Asignar estilo millares mientras se ingresa el NumberFormat
     //Llamar desde el evento: onKeyUp="estiloMillares(this)"
     n = e.value;
     if (n != "" && n > 0){
          n = n.replace(/\./g,"") //Elimina todos los puntos de la cadena
          n = formatearNumero(n);
     }else{
          n = "";
     }
     e.value = n;
}
//============================================================================//
