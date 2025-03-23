const slides = document.querySelectorAll(".slide")

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)

let count =0;

let getNext = ()=> {
    if (count < slides.length - 1) {
        count++;
        swapImages();
    }
}

let getPrev = ()=> {
    if (count > 0) {
        count--;
        swapImages();
    }
}


let swapImages = () => {
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${count*100}%)`
        }
    )
}