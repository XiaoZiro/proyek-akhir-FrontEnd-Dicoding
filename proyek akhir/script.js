const menuicon = document.getElementById("icon");
const menulist = document.getElementById("list");

menuicon.addEventListener("click",() =>{
    menulist.classList.toggle("hidden");
});