const img= document.getElementById("myImage");

img.addEventListener("click", () =>{
    img.classList.remove("bounce-animation");
    void img.offsetWidth;
    img.classList.add("bounce-animation");
})

const img2= document.getElementById("myImage2");

img2.addEventListener("click", () =>{
    img2.classList.remove("bounce-animation");
    void img2.offsetWidth;
    img2.classList.add("bounce-animation");
})

const img3= document.getElementById("myImage3");

img3.addEventListener("click", () =>{
    img3.classList.remove("bounce-animation");
    void img3.offsetWidth;
    img3.classList.add("bounce-animation");
})



const btn = document.getElementById("moveBtn");
const image = document.getElementById("myImage");

let moved = false;

btn.addEventListener("click", () => {
  if (!moved) {
    image.style.left = "300px"; // 動かす距離
  } else {
    image.style.left = "0";
  }
  moved = !moved;
});




const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
});
