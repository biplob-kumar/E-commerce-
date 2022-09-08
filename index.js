

const  bar= document.getElementById('bar');
const  close= document.getElementById('close');
const nav=  document.getElementById('navbar');

//  add btton 
if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add("active");
    })
    
}

//  close button 
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove("active");
      
    })

    
}
//  sproduct  

// var MainImg = document.getElementById("mainimg");
// var smallimg = document.getElementsByClassName("small-img");

// smallimg[0] .onclick = function () {
//     MainImg.src =  smallimg[0] .src
     
// }
// smallimg[1] .onclick = function () {
//     MainImg.src =  smallimg[1] .src
     
// }
// smallimg[2] .onclick = function () {
//     MainImg.src =  smallimg[2] .src
     
// }
// smallimg[3] .onclick = function () {
//     MainImg.src =  smallimg[3] .src
     
// }
// smallimg[4] .onclick = function () {
//     MainImg.src =  smallimg[4] .src
     
// }


function  myfunction (smallimg) {
    var fullimg = document.getElementById('MainImg')
    fullimg.src = smallimg.src;

    
}







