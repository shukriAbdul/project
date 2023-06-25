// let  toggle_btn = document.querySelector(".toggle_btn")
// let  toggle_btnIcon = document.querySelector(".toggle_btn i")
// let dropdown_menu = document.querySelector(".dropdown_menu")



// toggle_btn.onclick = function (){
//     dropdown_menu.classList.toggle('open')
//     const isopen = dropdown_menu.classList.contains('open')
 

//     toggle_btnIcon.classList = isopen
//     ? 'fa-solid fa-xmark'
//     : 'fa-solid fa-bars' 
// }
   
let  toggle_btn = document.querySelector(".toggle_btn")
let  toggle_btnIcon = document.querySelector(".toggle_btn i")
let dropdown_menu = document.querySelector(".dropdown_menu")



toggle_btn.addEventListener("click", () =>{

    dropdown_menu.classList.toggle('open')
   
    const isopen = dropdown_menu.classList.contains('open')
 

    toggle_btnIcon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars' 
});
   
