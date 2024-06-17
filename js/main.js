/*-------Header Mobile-------*/

const openSocialMedia = document.querySelector("#header-socialmedia-open");
const closeSocialMedia = document.querySelector("#header-socialmedia-close");

const socialMediaIcons = document.querySelector("#header_mobile_socialmedia");

const openMenuIcon = document.querySelector("#open_menu");
const closeMenuIcon = document.querySelector("#close_menu");

const headerLogo = document.querySelector("#header_mobile_logo");

const openLınkPage = document.querySelector("#header_links_mobile");

openSocialMedia.addEventListener("click",function(){
    headerLogo.style.display ="none";
    socialMediaIcons.style.display ="block";
    openSocialMedia.style.display="none";
closeSocialMedia.style.display="block";
openMenuIcon.style.display= "none";

});


closeSocialMedia.addEventListener("click",function(){
    headerLogo.style.display ="block";
    socialMediaIcons.style.display ="none";
    openSocialMedia.style.display="block";
closeSocialMedia.style.display="none";
openMenuIcon.style.display= "block";

});


openMenuIcon.addEventListener("click",function(){

    openMenuIcon.style.display ="none";
    closeMenuIcon.style.display="block";
  
});


closeMenuIcon.addEventListener("click",function(){


    openMenuIcon.style.display ="block";
    closeMenuIcon.style.display="none";

});


function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
/*-------Home-------*/






/*-------Albums-------*/







/*-------Vıdeos-------*/







/*-------Contact-------*/







