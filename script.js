

function changeBgColor(){
    let colors = ['Orange', 'Red', 'Blue', 'Green', 'Yellow']
    const color = colors[(Math.floor(Math.random() * colors.length))];
    document.querySelector('.bgColor').innerText = color;
    document.querySelector('.bgColor').style.backgroundColor = color;
    document.querySelector('body').style.backgroundColor = color;
}