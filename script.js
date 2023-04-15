const togglebtn=document.querySelector(".toogle")
const toggleicon=document.querySelector(".toogle i")
const drop=document.querySelector(".dropmenu")

togglebtn.addEventListener('click',function(){
    drop.classList.toggle('open')
    // const isopen=drop.classList.contains('open')
    // toggleicon.classList = isopen
    // ? 'fa-solid fa-Xmark'
    // :'fa-solid fa-bars'
})