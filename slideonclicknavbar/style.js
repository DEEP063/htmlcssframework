let ef = document.querySelector('#hh');

document.querySelector('#open').onclick = () =>{
  ef.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  ef.classList.remove('active');
}
window.onscroll = () =>{
    ef.classList.remove('active');
    // searchForm.classList.remove('active');
  };