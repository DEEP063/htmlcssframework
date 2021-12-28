
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
// let searchForm = document.querySelector('.search-form');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');


};
// document.querySelector('#search-btn').onclick = () =>{
//   searchForm.classList.toggle('active');
// };

window.onscroll = () =>{
    // searchForm.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
      }else{
        document.querySelector('#scroll-top').classList.remove('active');
      }
   
};

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();
  
//   let search = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//   search.classList.toggle('active');
// };
// document.querySelector('#a').onclick = () =>{
//     search.classList.remove('active');
//   }
// window.onscroll = () =>{
//     search.classList.remove('active');
//   };
  