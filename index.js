const skills = document.getElementById("skills");
const experience = document.getElementById("experience");
const sidemenu = document.getElementById("sidemenu");
const education = document.getElementById("education");
const hideMenu = document.getElementById("hide-menu");
const showMenu = document.getElementById("show-menu");
const image = document.getElementById("image");

const tabContents = document.querySelectorAll(".tab-contents");
const tabLinks = document.querySelectorAll(".tab-links");


hideMenu.addEventListener('click',hideheader);
showMenu.addEventListener('click',showheader);

const displaydata = (e, tabname) => {
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  e.target.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

skills.addEventListener("click", (e) => {
  displaydata(e, "showSkills");
});
experience.addEventListener("click", (e) => {
  displaydata(e, "showExperience");
});
education.addEventListener("click", (e) => {
  displaydata(e, "showEducation");
});


function hideheader(){
  console.log("hide menu")
  sidemenu.style.right = '-200px';
}
function showheader(){
  console.log("show menu")
sidemenu.style.right = "0";
}



function checksize (){

  if (window.innerWidth < 600) {
    image.src ='./images/AboutNew.png'
  }else{
    image.src ='./images/Aboutme05.svg'
  }
}
window.onresize = checksize;
window.onload = checksize;