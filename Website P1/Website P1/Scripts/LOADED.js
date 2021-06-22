<!--By Pedro Tavares, Kelvin Clark and Artem Basok -->

// SHOW CONTENT OF BODY ONLY WHEN BROWSER HAS LOADED ALL CONTENT //

window.addEventListener("load", showAll);

function showAll(){
    console.log("loaded");
    document.body.style.visibility = "visible";
}

///////////////////////////////////////////////////////////////////