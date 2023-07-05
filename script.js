const displayContainer = document.querySelectorAll('#bg-color');
const display = document.querySelector('#rgb-code');
const confirmation = document.querySelector('.confirmation');
const scores = document.querySelector('#score');
const error = document.querySelector('.error');

// a function that adds zero to single digits
function showZero(num){
    return num <= 9 ? `0${num}` : num
}
// a function that logs random rgb code for the main
function generateColor(){
    const [randomRed, randomGreen, randomBlue] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    const color = `rgb(${showZero(randomRed)}, ${showZero(randomGreen)}, ${showZero(randomBlue)})`

    return color
}
let color = generateColor();
display.textContent = color;


// a function that generates random 6 bg-colors (5 random and 1 from the genratecolor)
function randomColor(){
    let randomIndex = Math.floor(Math.random() * 6)
    for(let i = 0; i < displayContainer.length; i++){
        if(i === randomIndex){
            displayContainer[randomIndex].style.backgroundColor = color
        }else{
            displayContainer[i].style.backgroundColor = generateColor()
        }
    }
}
randomColor();

// to select the code
displayContainer.forEach(item=> {
    item.addEventListener('click', ()=> {
        /// to display either the confirmation or error message when color is clicked on
        if(item.style.backgroundColor === color){
            confirmation.style.display = "flex";
            // to increase the score on every success
            scores.textContent++
            setTimeout(()=> {
                confirmation.style.display = "none"
                resetRGB()
            }, 2000)
        }else{
            error.classList.add('active');
            setTimeout(()=> {
                error.classList.remove('active')
            }, 2000)
        }
    })
})

// a function that resets the game
function resetRGB(){
    color = generateColor();
    display.textContent = color;
    randomColor();
}
