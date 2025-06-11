// let listElements = document.querySelectorAll('.list__button--click');
// listElements.forEach((element) => {
//   element.addEventListener('click', () => {
//     element.classList.toggle('arrow');

//     let height = 0;
//     let menu = element.nextElementSibling;
//     if(menu.clientHeight ===0){
//         height = menu.scrollHeight;
//     }

//     menu.style.height = `${height}px`;
//   });
// });


const fulImgBox = document.getElementById('fulImgBox');
fulImg = document.getElementById('fulImg');

function closeImg(){
  fulImgBox.style.display = 'none';
}

function openFullImg(reference){
  fulImgBox.style.display = 'flex';
  fulImgBox.style.paddingTop = '400px';
  fulImg.src = reference;
}