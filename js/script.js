let divs = document.querySelectorAll(".slider");
let main = document.querySelector("main");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");

let sliderCount = 0;

rightBtn.addEventListener("click", ()=>{
    sliderCount++;
    if(sliderCount > divs.length-1){
        sliderCount = 0;
    }
    chkSliderImages();
    mainBg();
});
leftBtn.addEventListener("click", ()=>{
    sliderCount--;
    if(sliderCount < 0){
        sliderCount = divs.length-1;
    }
    chkSliderImages();
    mainBg();
});

function mainBg(){
    main.style.backgroundImage = divs[sliderCount].style.backgroundImage;
}

function chkSliderImages(){
    divs.forEach((div)=>{
        div.classList.remove("active");
    });
    divs[sliderCount].classList.add("active");
}


