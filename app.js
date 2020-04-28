const h3 = document.getElementById('h3'),
      leftInput = document.getElementById('leftColorInput'),
      rightInput = document.getElementById('rightColorInput'),
      body = document.body;


function setGradient(){
    body.style.background = `linear-gradient(to right, ${leftColorInput.value}, ${rightColorInput.value})`;
    h3.textContent = `${body.style.background};`
}


leftColorInput.addEventListener('input', setGradient);
rightColorInput.addEventListener('input', setGradient);
