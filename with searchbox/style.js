let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
};
window.onscroll = () =>{
    searchForm.classList.remove('active');
  };
  
  let search = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  search.classList.toggle('active');
};
document.querySelector('#a').onclick = () =>{
    search.classList.remove('active');
  }
window.onscroll = () =>{
    search.classList.remove('active');
  };
  