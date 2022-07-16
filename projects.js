//-------------- PROJECTS POP-UP --------------------//
let galleryImages= document.querySelectorAll('.services-cell');
let getLatestOpenedImg;
let windowWidth= window.innerWidth;

galleryImages.forEach(function(image, index){
  image.onclick= function(){
  getLatestOpenedImg= index + 1;

    let container = document.body;
    let newImgWindow= document.createElement('div');
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute('class', 'img-window');
    newImgWindow.setAttribute('onclick', 'closeImg()')

    let newImg= image.firstElementChild.cloneNode();
    newImgWindow.appendChild(newImg);
    newImg.classList.remove('services-cell_img')
    newImg.classList.add('popup-img');
    newImg.setAttribute('id', 'current-img');
  }

})