const skills = document.getElementById("skills");
const exprience = document.getElementById("exprience");
const sidemenu = document.getElementById("sidemenu");
const eduction = document.getElementById("eduction");
const hideMenu = document.getElementById("hide-menu");
const showMenu = document.getElementById("show-menu");

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
exprience.addEventListener("click", (e) => {
  displaydata(e, "showExperience");
});
eduction.addEventListener("click", (e) => {
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
