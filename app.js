const h3 = document.getElementById('h3'),
      leftInput = document.getElementById('leftColorInput'),
      rightInput = document.getElementById('rightColorInput'),
      body = document.body,
      randomButton = document.getElementById('randomButton');


function setGradient(){
    body.style.background = `linear-gradient(to right, ${leftColorInput.value}, ${rightColorInput.value})`;
    h3.textContent = `${body.style.background};`;
}


leftColorInput.addEventListener('input', setGradient);
rightColorInput.addEventListener('input', setGradient);


randomButton.addEventListener('click', function(){
    const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    h3.textContent = `${body.style.background};`;
});
