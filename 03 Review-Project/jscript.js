const imgArr = ['01.png','02.png','03.png','04.png','05.png','06.png'];

const btns = document.querySelectorAll('.btn');
const imgbtn = document.getElementsByClassName('btn res');
const nextImg = document.getElementsByClassName('btn next');
const prevImg = document.getElementsByClassName('btn prev');

btns.forEach(btn => btn.addEventListener('click',function(e){

 if(e.target.className == 'btn next'){
    
    const imgDisplay= document.querySelector('.imgDisplay');
    let img = document.createElement("img");
    img.src = `${imgArr[randomImg()]}`;
    img.width = "330";
    img.height = "260";
    imgDisplay.appendChild(img);
    

 }
}));

function randomImg(){
    return  x =  Math.floor((Math.random() * imgArr.length) + 1);
  
    
}
