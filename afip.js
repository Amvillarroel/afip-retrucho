let facturador = document.querySelector("#facturador");
let presentacionesDigitales = document.querySelector("#presentaciones-digitales");
let abc = document.querySelector("#abc");
let micrositios = document.querySelector("#micrositios");
let vencimientos = document.querySelector("#vencimientos");
let guias = document.querySelector("#guias");
let ceta = document.querySelector("#ceta");
let monotributo = document.querySelector("#monotributo");
let formularios = document.querySelector("#formularios");

function cambiarImagen(img){
    
    if (img == "facturadorHover") {
    facturador.src="images/facturador-hover.svg";
    }
    else if (img == "facturador") { 
    facturador.src="images/facturador.svg";
    }
    else if (img == "presentacionesHover") { 
    presentacionesDigitales.src="images/presentaciones-hover.svg";
    }
    else if (img == "presentaciones") { 
    presentacionesDigitales.src="images/presentaciones.svg";
    }
    else if (img == "abcHover") { 
    abc.src="images/abc-hover.svg";
    }
    else if (img == "abc") { 
    abc.src="images/abc.svg";
    }
    else if (img == "micrositiosHover") { 
    micrositios.src="images/micrositios-hover.svg";
    }
    else if (img == "micrositios") { 
    micrositios.src="images/micrositios.svg";
    }
    else if (img == "vencimientosHover") { 
    vencimientos.src="images/vencimientos-hover.svg";
    }
    else if (img == "vencimientos") { 
    vencimientos.src="images/vencimientos.svg";
    }
    else if (img == "guiasHover") { 
    guias.src="images/guias-hover.svg";
    }
    else if (img == "guias") { 
    guias.src="images/guias.svg";
    }
    else if (img == "cetaHover") { 
    ceta.src="images/ceta-hover.svg";
    }
    else if (img == "ceta") { 
    ceta.src="images/ceta.svg";
    }
    else if (img == "monotributoHover") { 
    monotributo.src="images/monotributo-hover.svg";
    }
    else if (img == "monotributo") { 
    monotributo.src="images/monotributo.svg";
    }
    else if (img == "formulariosHover") { 
    formularios.src="images/formularios-hover.svg";
    }
    else if (img == "formularios") { 
    formularios.src="images/formularios.svg";
    }


  }