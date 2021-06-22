<!--By Pedro Tavares, Kelvin Clark and Artem Basok -->

var container = document.getElementById("container");
var interactionArea = document.getElementById("interactionArea");
var logoSketch = document.querySelector("canvas");
var icon1 = document.getElementById("menuIcon1");
var icon1Img = document.querySelector("#menuIcon1 img");
var icon2 = document.getElementById("menuIcon2");
var icon2Img = document.querySelector("#menuIcon2 img");
var icon3 = document.getElementById("menuIcon3");
var icon3Img = document.querySelector("#menuIcon3 img");
var icon4 = document.getElementById("menuIcon4");
var icon4Img = document.querySelector("#menuIcon4 img");
var icon5 = document.getElementById("menuIcon5");
var icon5Img = document.querySelector("#menuIcon5 img");

interactionArea.onmouseover = openMenu;
interactionArea.onmouseout = closeMenu;

function openMenu(){
    container.style.backgroundColor = "white";
    container.style.transition = "4s";
    /* hide canvas on open */
    logoSketch.style.width = "0px";
    logoSketch.style.left = "50%";
    logoSketch.style.top = "50%";
    logoSketch.style.opacity = "0";
    logoSketch.style.visibility = "hidden";
    logoSketch.style.transition = "0.5s";
    /***********************/
    /* show icons on open */
    icon1.style.visibility = "visible";
    icon1.style.left = "10%";
    icon1.style.top = "25%";
    icon1.style.transition = "1s";
    icon1Img.style.transition = "1s";
    icon1Img.style.width = "13%";
    icon1Img.style.height = "auto";
    icon2.style.visibility = "visible";
    icon2.style.left = "27%";
    icon2.style.top = "25%";
    icon2.style.transition = "1s";
    icon2Img.style.transition = "1s";
    icon2Img.style.width = "16%";
    icon2Img.style.height = "auto";
    icon3.style.visibility = "visible";
    icon3.style.left = "44%";
    icon3.style.top = "25%";
    icon3.style.transition = "1s";
    icon3Img.style.transition = "1s";
    icon3Img.style.width = "21%";
    icon3Img.style.height = "auto";
    icon4.style.visibility = "visible";
    icon4.style.left = "61%";
    icon4.style.top = "25%";
    icon4.style.transition = "1s";
    icon4Img.style.transition = "1s";
    icon4Img.style.width = "29.5%";
    icon4Img.style.height = "auto";
    icon5.style.visibility = "visible";
    icon5.style.left = "77%";
    icon5.style.top = "25%";
    icon5.style.transition = "1s";
    icon5Img.style.transition = "1s";
    icon5Img.style.width = "50%";
    icon5Img.style.height = "auto";
    /****************************/
    interactionArea.style.width = "100vw";
    interactionArea.style.left = "0vw";
}

/* Menu functionalities while open */
var sobreDAT = document.getElementById("sobreDAT");

icon1.onmouseover = showTextSobreDAT;
icon1.onmouseout = hideTextSobreDAT;

function showTextSobreDAT(){
    sobreDAT.style.opacity = "1";
    icon1Img.style.opacity = "0";
    icon1Img.style.visibility = "hidden";
}

function hideTextSobreDAT(){
    sobreDAT.style.opacity = "0";
    icon1Img.style.opacity = "1";
    icon1Img.style.visibility = "visible";
}

var edicao2018 = document.getElementById("edicao2018");

icon2.onmouseover = showTextEdicao2018;
icon2.onmouseout = hideTextEdicao2018;

function showTextEdicao2018(){
    edicao2018.style.opacity = "1";
    icon2Img.style.opacity = "0";
    icon2Img.style.visibility = "hidden";
}

function hideTextEdicao2018(){
    edicao2018.style.opacity = "0";
    icon2Img.style.opacity = "1";
    icon2Img.style.visibility = "visible";
}

var local = document.getElementById("local");

icon3.onmouseover = showTextLocal;
icon3.onmouseout = hideTextLocal;

function showTextLocal(){
    local.style.opacity = "1";
    icon3Img.style.opacity = "0";
    icon3Img.style.visibility = "hidden";
}

function hideTextLocal(){
    local.style.opacity = "0";
    icon3Img.style.opacity = "1";
    icon3Img.style.visibility = "visible";
}

var interv = document.getElementById("intervenientes");

icon4.onmouseover = showTextInterv;
icon4.onmouseout = hideTextInterv;

function showTextInterv(){
    interv.style.opacity = "1";
    icon4Img.style.opacity = "0";
    icon4Img.style.visibility = "hidden";
}

function hideTextInterv(){
    interv.style.opacity = "0";
    icon4Img.style.opacity = "1";
    icon4Img.style.visibility = "visible";
}

var contatos = document.getElementById("contatos");

icon5.onmouseover = showTextContatos;
icon5.onmouseout = hideTextContatos;

function showTextContatos(){
    contatos.style.opacity = "1";
    icon5Img.style.opacity = "0";
    icon5Img.style.visibility = "hidden";
}

function hideTextContatos(){
    contatos.style.opacity = "0";
    icon5Img.style.opacity = "1";
    icon5Img.style.visibility = "visible";
}


/**********************************/

function closeMenu(){
    container.style.backgroundColor = "black";
    container.style.transition = "0.5s";

    logoSketch.style.width = "20vw";
    logoSketch.style.left = "43%";
    logoSketch.style.top = "35%";
    logoSketch.style.opacity = "1";
    logoSketch.style.visibility = "visible";
    logoSketch.style.transition = "3s";
    /**********************************/
    /* hide icons on close */
    icon1.style.visibility = "hidden";
    icon1.style.left = "45%";
    icon1.style.top = "50%";
    icon1.style.transition = "0.5s";
    icon1Img.style.transition = "0.5s";
    icon1Img.style.width = "0";
    // icon1Img.style.height = "0";
    icon2.style.visibility = "hidden";
    icon2.style.left = "50%";
    icon2.style.top = "50%";
    icon2.style.transition = "1s";
    icon2Img.style.transition = "1s";
    icon2Img.style.width = "0";
    // icon2Img.style.height = "0";
    icon3.style.visibility = "hidden";
    icon3.style.left = "45%";
    icon3.style.top = "50%";
    icon3.style.transition = "0.5s";
    icon3Img.style.transition = "0.5s";
    icon3Img.style.width = "0";
    // icon3Img.style.height = "0";
    icon4.style.visibility = "hidden";
    icon4.style.left = "50%";
    icon4.style.top = "50%";
    icon4.style.transition = "1s";
    icon4Img.style.transition = "1s";
    icon4Img.style.width = "0";
    // icon4Img.style.height = "0";
    icon5.style.visibility = "hidden";
    icon5.style.left = "50%";
    icon5.style.top = "50%";
    icon5.style.transition = "0.5s";
    icon5Img.style.transition = "0.5s";
    icon5Img.style.width = "0";
    // icon5Img.style.height = "0";
    /******************************/
    interactionArea.style.width = "30vw";
    interactionArea.style.left = "35.5vw";
}

/*************************************************************************/
/* mobile version animations */

var interactionAreaMob = document.getElementById("interactionAreaMobile");
var logoSketchMob = document.getElementById("logoSketchMob");
var menuIcon1Mob = document.getElementById("menuIcon1Mob");
var menuIcon2Mob = document.getElementById("menuIcon2Mob");
var menuIcon3Mob = document.getElementById("menuIcon3Mob");
var menuIcon4Mob = document.getElementById("menuIcon4Mob");
var menuIcon5Mob = document.getElementById("menuIcon5Mob");

interactionAreaMob.onclick = showMenuMob;

function showMenuMob() {
    container.style.backgroundColor = "white";
    container.style.transition = "4s";
    logoSketchMob.style.height = "0";
    logoSketchMob.style.marginTop = "50%";
    interactionAreaMob.style.top = "0";
    interactionAreaMob.style.height = "100vh";
    menuIcon1Mob.style.left = "40%";
    menuIcon2Mob.style.left = "40%";
    menuIcon3Mob.style.left = "40%";
    menuIcon4Mob.style.left = "40%";
    menuIcon5Mob.style.left = "40%";
}

/**************************************************************************/
/* animation intro */

var introSceneb1 = document.getElementById("introSceneb1");
var introScene = document.getElementById("introScene");
var introSceneText = document.getElementById("introSceneText");

setTimeout(swipe, 3500);
setTimeout(swipe2, 3000);
setTimeout(introTextAppear, 500);


function swipe(){
    introSceneb1.style.top = "101%";
}

function swipe2(){
    introScene.style.top = "101%";
}

function introTextAppear(){
    introSceneText.style.opacity = "1";
}

/******************************************************************************/