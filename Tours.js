function createImage(src){

  const image = document.createElement("img");
  image.src = src;
  return image;

}

function ondblclick(event){
  currentIndex = event.currentTarget.dataset.index;
  const image  = createImage(event.currentTarget.src);
  showFullsizeImage(image);
  document.body.classList;
  modalView.style.top = window.pageYOffset + "px";
  modalView.classList.remove("hidden");
  document.addEventListener('keydown', nextPhoto);
}

function nextPhoto(event){
  if(event.key === 'Escape'){
    hideModalView();
    return;
  }

  if (event.key !== 'ArrowLeft' && event.key !=='ArrowRight') {
    return;
  }
  let nextIndex = currentIndex;
  if (event.key === 'ArrowLeft') {
    nextIndex--;
  }else {
    nextIndex++;
  }

  if (nextIndex < 0 || nextIndex == PHOTOLIST.length) {
    return;
  }
  const photoSrc = PHOTOLIST[nextIndex];
  modalView.innerHTML = '';
  const image = createImage(photoSrc);
  modalView.appendChild(image);
  currentIndex = nextIndex;
}

function showFullsizeImage(image){
  modalView.innerHTML = '';

  image.addEventListener('pointerdown', startDrag);
  image.addEventListener('pointermove', duringDrag);
  image.addEventListener('pointerup', endDrag);
  image.addEventListener('pointercancel', endDrag);
  modalView.appendChild(image);
}

let originX = null;
function startDrag(event){
  event.preventDefault();
  event.stopPropagation();

  originX = event.clientX;
  event.target.setPointerCapture(event.pointerId);
}

function duringDrag(event){
  if (originX) {
    const currentX = event.clientX;
    const delta = currentX - originX;
    const element = event.currentTarget;
    element.style.transform = 'translateX(' + delta + 'px)';
  }
}

function endDrag(event){
  if (!originX) {
    return;
  }

  const currentX = event.clientX;
  const delta = currentX - originX;
  originX = null;
  if (Math.abs(delta) < 100) {
    event.currentTarget.style.transform = '';
    return;
  }

  let nextIndex = currentIndex;
  if(delta < 0){
    nextIndex++;;
  }else {
    nextIndex--;
  }

  if (nextIndex < 0 || nextIndex == PHOTOLIST.length) {
    event.currentTarget.style.transform = '';
    return;
  }

  const photoSrc = PHOTOLIST[nextIndex];
  const image = createImage(photoSrc);
  if (delta < 0) {
    image.classList.add('animate-next');
  }else {
    image.classList.add('animate-prev');
  }
  showFullsizeImage(image);
  currentIndex = nextIndex;
}

function onModalClick(){
  hideModalView();
}

function hideModalView(){
  document.body.classList;
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
  document.removeEventListener('keydown', nextPhoto);
}

let currentIndex = null;
const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTOLIST.length; i++) {
  const photoSrc = PHOTOLIST[i];
  const image = createImage(photoSrc);
  image.dataset.index = i;
  image.addEventListener('pointerdown', ondblclick);
  albumView.appendChild(image);
}

const modalView = document.querySelector("#modal-view");
modalView.addEventListener("pointerdown", onModalClick);


//-----------------------------------------------------------------------------------------------//

var resized;
  $('#PhotoAlbum img').mouseover(function(){
    if (!resized) {
          $(this).animate({width: "200px", height: "200px"}, 'slow');
          resized = true;
      }

  });
  $('#PhotoAlbum img').mouseout(function(){
  if (resized) {
          $(this).animate({width: "150px", height: "150px"}, 'slow');
          resized = false;
      }
      return false;
  })
//--------------------------------------------------------------------------------------------------------------//

function changeImage(){
  const image = document.querySelector("#gmail img");
  image.src = "Pictures/open-email.png";
}
var image = document.querySelector("#gmail img");
image.addEventListener("mouseover",changeImage);

function returnImage(){
  const image = document.querySelector("#gmail img");
  image.src = "Pictures/email (1).png";
}
var image = document.querySelector("#gmail img");
image.addEventListener("mouseout",returnImage);

function onclickImage(){
  const image = document.querySelector("#gmail img");
  image.src = "Pictures/email.png";

}
var image = document.querySelector("#gmail img");
image.addEventListener("click",onclickImage);
