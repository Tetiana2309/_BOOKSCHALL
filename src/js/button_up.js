const btnRef = document.querySelector('.btn-up');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 1000) {
    addBtnUp();
  } else {
    removeBtnUp();
  }
});
if (btnRef) {
  btnRef.addEventListener('click', scrollToTop);
}



function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function removeBtnUp() {
  btnRef?.classList.add('hidden-btn-up');
}
function addBtnUp() {
  btnRef?.classList.remove('hidden-btn-up');
}
