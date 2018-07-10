document.addEventListener("DOMContentLoaded",
function() {
    alert("Welcome!");
    console.log("check");
let MyPhoto = getElementsById('birds.jpg')
// document.getElementsByID('birds.jpg')
myPhoto.addEventListener("click", changeImage)
function changeImage(){
    console.log("HI there");
    myPhoto.src = "lol.jpg"
}
}) // END OF DOM CONTENT LOADED
