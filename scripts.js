console.log("linked");

const menuBtn = () => document.getElementById("nav-menu-bars");
const navCats = () => document.getElementById("nav-categories-id");

menuBtn().addEventListener("click", function(){ 
    //navCats().style.display === "none" ? navCats.style.display = "flex" : navCats().style.display = "none";
    navCats().style.display == "none" ? navCats().style.display = "flex" : navCats().style.display = "none";
    
});