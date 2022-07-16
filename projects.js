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

    newImg.onload= function(){
      let newNextBtn = document.createElement('a');
      newNextBtn.innerHTML= '<i class="fas fa-chevron-right next"></i>';
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute('class', 'img-btn-next');
      newNextBtn.setAttribute('onclick', 'changeImg(1)');

      let newPrevBtn = document.createElement('a');
      newPrevBtn.innerHTML= '<i class="fas fa-chevron-left next"></i>';
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute('class', 'img-btn-prev');
      newPrevBtn.setAttribute('onclick', 'changeImg(0)');
    }
  }

})

function closeImg(){
  document.querySelector('.img-window').remove();
  document.querySelector('.img-btn-next').remove();
  document.querySelector('.img-btn-prev').remove();
}