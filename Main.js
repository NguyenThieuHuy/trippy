function showAd(){
        adbanner.classList.remove("hidden");
      }


function closeAd() {
        adbanner.classList.add("hidden");
      }

const adbanner = document.querySelector('#modal');
const closeButton = adbanner.querySelector('button');
const showButton = document.querySelector('#show-modal');

showButton.addEventListener('click',showAd);

closeButton.addEventListener('click',closeAd);
