let facturador = document.querySelector("#facturador");
let servicioFacturador = document.querySelector(".servicio-facturador");
let presentacionesDigitales = document.querySelector("#presentaciones-digitales");
let servicioPresentaciones = document.querySelector(".servicio-presentaciones");
let abc = document.querySelector("#abc");
let servicioAbc = document.querySelector(".servicio-abc");
let micrositios = document.querySelector("#micrositios");
let servicioMicrositio = document.querySelector(".servicio-micrositio");
let vencimientos = document.querySelector("#vencimientos");
let servicioVencimientos = document.querySelector(".servicio-vencimientos");
let guias = document.querySelector("#guias");
let servicioGuias = document.querySelector(".servicio-guias");
let ceta = document.querySelector("#ceta");
let servicioCeta = document.querySelector(".servicio-ceta");
let monotributo = document.querySelector("#monotributo");
let servicioMonotributo = document.querySelector(".servicio-monotributo");
let formularios = document.querySelector("#formularios");
let servicioFormularios = document.querySelector(".servicio-formularios");

function cambiarImagen(img){
    
    if (img == "facturadorHover") {
    facturador.src="images/facturador-hover.svg";
    servicioFacturador.style.color = 'dodgerblue';
    }
    else if (img == "facturador") { 
    facturador.src="images/facturador.svg";
    servicioFacturador.style.color = 'black';
    }
    else if (img == "presentacionesHover") { 
    presentacionesDigitales.src="images/presentaciones-hover.svg";
    servicioPresentaciones.style.color = 'dodgerblue';
    }
    else if (img == "presentaciones") { 
    presentacionesDigitales.src="images/presentaciones.svg";
    servicioPresentaciones.style.color = 'black';
    }
    else if (img == "abcHover") { 
    abc.src="images/abc-hover.svg";
    servicioAbc.style.color = 'dodgerblue';
    }
    else if (img == "abc") { 
    abc.src="images/abc.svg";
    servicioAbc.style.color = 'black';
    }
    else if (img == "micrositiosHover") { 
    micrositios.src="images/micrositios-hover.svg";
    servicioMicrositio.style.color = 'dodgerblue';
    }
    else if (img == "micrositios") { 
    micrositios.src="images/micrositios.svg";
    servicioMicrositio.style.color = 'black';
    }
    else if (img == "vencimientosHover") { 
    vencimientos.src="images/vencimientos-hover.svg";
    servicioVencimientos.style.color = 'dodgerblue';
    }
    else if (img == "vencimientos") { 
    vencimientos.src="images/vencimientos.svg";
    servicioVencimientos.style.color = 'black';
    }
    else if (img == "guiasHover") { 
    guias.src="images/guias-hover.svg";
    servicioGuias.style.color = 'dodgerblue';
    }
    else if (img == "guias") { 
    guias.src="images/guias.svg";
    servicioGuias.style.color = 'black';
    }
    else if (img == "cetaHover") { 
    ceta.src="images/ceta-hover.svg";
    servicioCeta.style.color = 'dodgerblue';
    }
    else if (img == "ceta") { 
    ceta.src="images/ceta.svg";
    servicioCeta.style.color = 'black';
    }
    else if (img == "monotributoHover") { 
    monotributo.src="images/monotributo-hover.svg";
    servicioMonotributo.style.color = 'dodgerblue';
    }
    else if (img == "monotributo") { 
    monotributo.src="images/monotributo.svg";
    servicioMonotributo.style.color = 'black';
    }
    else if (img == "formulariosHover") { 
    formularios.src="images/formularios-hover.svg";
    servicioFormularios.style.color = 'dodgerblue';
    }
    else if (img == "formularios") { 
    formularios.src="images/formularios.svg";
    servicioFormularios.style.color = 'black';
    }


  }