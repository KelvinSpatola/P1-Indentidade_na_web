<!--By Pedro Tavares, Kelvin Clark and Artem Basok -->

/* animation intro */

var blackBG = document.getElementById("blackBG");

window.onload = swipe;

function swipe(){
    blackBG.style.left = "101%";
}

/* animation outro */

var logoHOME = document.getElementById("logoInteractionArea");

logoHOME.onclick = swipeOut;      //****** logo on header click to home ****/

function swipeOut(){
    blackBG.style.left = "0";
    blackBG.style.backgroundColor = "white";
    setTimeout(redirect, 2000);
}

function redirect(){
    window.location = "Home.html"
}

/**/

var homeLink = document.getElementById("homeLink");
var homeLinkTab = document.getElementById("homeLinkTab");
var homeLinkMob = document.getElementById("homeLinkMob");

homeLink.onclick = swipeOut1;
homeLinkTab.onclick = swipeOut1;
homeLinkMob.onclick = swipeOut1;

function swipeOut1(){
    changeStates();
    blackBG.style.left = "0";
    blackBG.style.backgroundColor = "white";
    setTimeout(redirect1, 2000);
}

function redirect1(){
    window.location = "Home.html"
}

/**/

var sobreLink = document.getElementById("sobreLink");
var sobreLinkTab = document.getElementById("sobreLinkTab");
var sobreLinkMob = document.getElementById("sobreLinkMob");
var cont = document.getElementById("container");

sobreLink.onclick = findSobre;
sobreLinkTab.onclick = findSobre;
sobreLinkMob.onclick = findSobre;

function findSobre(){
    changeStates();
    cont.scrollIntoView();
}

/**/

var edicaoLink = document.getElementById("edicaoLink");
var edicaoLinkTab = document.getElementById("edicaoLinkTab");
var edicaoLinkMob = document.getElementById("edicaoLinkMob");
var cont2 = document.getElementById("container2");

edicaoLink.onclick = findEdicao;
edicaoLinkTab.onclick = findEdicao;
edicaoLinkMob.onclick = findEdicao;

function findEdicao(){
    changeStates();
    cont2.scrollIntoView();
}

/**/

var intervenientesLink = document.getElementById("intervenientesLink");
var intervenientesLinkTab = document.getElementById("intervenientesLinkTab");
var intervenientesLinkMob = document.getElementById("intervenientesLinkMob");
var cont3 = document.getElementById("container3");

intervenientesLink.onclick = findIntervenientes;
intervenientesLinkTab.onclick = findIntervenientes;
intervenientesLinkMob.onclick = findIntervenientes;

function findIntervenientes(){
    changeStates();
    cont3.scrollIntoView();
}

/**/

/**/

var localLink = document.getElementById("localLink");
var localLinkTab = document.getElementById("localLinkTab");
var localLinkMob = document.getElementById("localLinkMob");
var cont4 = document.getElementById("container4");

localLink.onclick = findLocal;
localLinkTab.onclick = findLocal;
localLinkMob.onclick = findLocal;

function findLocal(){
    changeStates();
    cont4.scrollIntoView();
}

/**/

var contatosLink = document.getElementById("contatosLink");
var contatosLinkTab = document.getElementById("contatosLinkTab");
var contatosLinkMob = document.getElementById("contatosLinkMob");
var cont5 = document.getElementById("container5");

contatosLink.onclick = findContatos;
contatosLinkTab.onclick = findContatos;
contatosLinkMob.onclick = findContatos;

function findContatos(){
    changeStates();
    cont5.scrollIntoView();
}

/**/

///*********************************Large Menu Header*********************************************/
/* opacity effects on hovering */

var menuIcon1 = document.getElementById("menuIcon1");
var menuIcon2 = document.getElementById("menuIcon2");
var menuIcon3 = document.getElementById("menuIcon3");
var menuIcon4 = document.getElementById("menuIcon4");
var menuIcon5 = document.getElementById("menuIcon5");
var menuIcon6 = document.getElementById("menuIcon6");

var menuIconText1 = document.getElementById("menuIconText1");
var menuIconText2 = document.getElementById("menuIconText2");
var menuIconText3 = document.getElementById("menuIconText3");
var menuIconText4 = document.getElementById("menuIconText4");
var menuIconText5 = document.getElementById("menuIconText5");
var menuIconText6 = document.getElementById("menuIconText6");

menuIcon1.onmouseover = icon1Hovered;
menuIcon1.onmouseout = original;

function icon1Hovered(){
    menuIcon1.style.opacity = "0.4";
    menuIcon2.style.opacity = "0.1";
    menuIcon3.style.opacity = "0.1";
    menuIcon4.style.opacity = "0.1";
    menuIcon5.style.opacity = "0.1";
    menuIcon6.style.opacity = "0.1";

    menuIconText1.style.opacity = "1";
}

menuIcon2.onmouseover = icon2Hovered;
menuIcon2.onmouseout = original;

function icon2Hovered(){
    menuIcon1.style.opacity = "0.1";
    menuIcon2.style.opacity = "0.4";
    menuIcon3.style.opacity = "0.1";
    menuIcon4.style.opacity = "0.1";
    menuIcon5.style.opacity = "0.1";
    menuIcon6.style.opacity = "0.1";

    menuIconText2.style.opacity = "1";
}

menuIcon3.onmouseover = icon3Hovered;
menuIcon3.onmouseout = original;

function icon3Hovered(){
    menuIcon1.style.opacity = "0.1";
    menuIcon2.style.opacity = "0.1";
    menuIcon3.style.opacity = "0.4";
    menuIcon4.style.opacity = "0.1";
    menuIcon5.style.opacity = "0.1";
    menuIcon6.style.opacity = "0.1";

    menuIconText3.style.opacity = "1";
}

menuIcon4.onmouseover = icon4Hovered;
menuIcon4.onmouseout = original;

function icon4Hovered(){
    menuIcon1.style.opacity = "0.1";
    menuIcon2.style.opacity = "0.1";
    menuIcon3.style.opacity = "0.1";
    menuIcon4.style.opacity = "0.4";
    menuIcon5.style.opacity = "0.1";
    menuIcon6.style.opacity = "0.1";

    menuIconText4.style.opacity = "1";
}

menuIcon5.onmouseover = icon5Hovered;
menuIcon5.onmouseout = original;

function icon5Hovered(){
    menuIcon1.style.opacity = "0.1";
    menuIcon2.style.opacity = "0.1";
    menuIcon3.style.opacity = "0.1";
    menuIcon4.style.opacity = "0.1";
    menuIcon5.style.opacity = "0.4";
    menuIcon6.style.opacity = "0.1";

    menuIconText5.style.opacity = "1";
}

menuIcon6.onmouseover = icon6Hovered;
menuIcon6.onmouseout = original;

function icon6Hovered(){
    menuIcon1.style.opacity = "0.1";
    menuIcon2.style.opacity = "0.1";
    menuIcon3.style.opacity = "0.1";
    menuIcon4.style.opacity = "0.1";
    menuIcon5.style.opacity = "0.1";
    menuIcon6.style.opacity = "0.4";

    menuIconText6.style.opacity = "1";
}


function original(){
    menuIcon1.style.opacity = "0.3";
    menuIcon2.style.opacity = "0.3";
    menuIcon3.style.opacity = "0.3";
    menuIcon4.style.opacity = "0.3";
    menuIcon5.style.opacity = "0.3";
    menuIcon6.style.opacity = "0.3";

    menuIconText1.style.opacity = "0";
    menuIconText2.style.opacity = "0";
    menuIconText3.style.opacity = "0";
    menuIconText4.style.opacity = "0";
    menuIconText5.style.opacity = "0";
    menuIconText6.style.opacity = "0";
}

/**************************************************************/

///*********************************Small MenuHeader*********************************************/
/* animation on click of menuSymbol */

var menuSymbol = document.querySelector("header #menuSymbol");
var first = document.getElementById("firstCircle");
var second = document.getElementById("secondCircle");
var third = document.getElementById("thirdCircle");
var listTab = document.getElementById("listTab");
var listMob = document.getElementById("listMob");
var menuSymbolNum = 0;

menuSymbol.onclick = changeStates;

function changeStates(){

    if(menuSymbolNum < 1){
        animateState1();
        menuSymbolNum = 1;
    } else {
        animateState2();
        menuSymbolNum = 0;
    }

    console.log(menuSymbolNum);
}

function animateState1(){
    first.style.transform = "rotate(360deg)";
    third.style.transform = "rotate(360deg)";
    listTab.style.left = "70%";
    listMob.style.left = "50%";
}

function animateState2(){
    first.style.transform = "rotate(-360deg)";
    third.style.transform = "rotate(-360deg)";
    listTab.style.left = "110%";
    listMob.style.left = "110%";
}

// redirect pages to intervenient chosen on intervenient page with page animations

// To Mario
var marioBtn = document.getElementById("marioButton");

marioBtn.onclick = toMario;

function toMario(){
    goToMario();
}

function goToMario(){
    blackBG.style.left = "0";
    blackBG.style.backgroundColor = "black";
    setTimeout(redirectMario, 2000);
}

function redirectMario(){
    window.location = "Mario.html";
}
//**//

// To Thomas
var thomasBtn = document.getElementById("thomasButton");

thomasBtn.onclick = toThomas;

function toThomas(){
    goToThomas();
}

function goToThomas(){
    blackBG.style.left = "0";
    blackBG.style.backgroundColor = "black";
    setTimeout(redirectThomas, 2000);
}

function redirectThomas(){
    window.location = "Thomas.html";
}
//**//

// To Luna
var lunaBtn = document.getElementById("lunaButton");

lunaBtn.onclick = toLuna;

function toLuna(){
    goToLuna();
}

function goToLuna(){
    blackBG.style.left = "0";
    blackBG.style.backgroundColor = "black";
    setTimeout(redirectLuna, 2000);
}

function redirectLuna(){
    window.location = "Luna.html";
}
//***//

// change num back to 0 when state is changed to open menu before entering tablet/mobile version

// var mainCont = document.getElementById("mainContainer");
// if(mainCont.style.width < "1200px" && menuSymbolNum > 0) changeStates();


