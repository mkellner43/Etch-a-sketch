const container = document.querySelector('.container');
btnBlack = document.createElement('button');
btnGray = document.createElement('button');
btnRGB = document.createElement('button');
btnSize = document.createElement('button');
btnReset = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

function createDivs(col, row) {
  for (let i = 0; i < col * row; i++) {
    const div = document.createElement('div');
    container.style.gridTemplateColumns =  `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    container.appendChild(div).classList.add('box');
  }
}


function grayColor () {
  const boxs = container.querySelectorAll('.box');
  btnGray.textContent = 'Gray';
  btnGray.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let rNum = Math.floor(Math.random() * 255);
      box.style.background = `rgb(${rNum}, ${rNum}, ${rNum})`;
    }))

  })
  buttonsContainer.appendChild(btnGray).classList.add('btn');
}


function blackColor () {
  const boxs = container.querySelectorAll('.box');
  btnBlack.textContent = 'Black';
  btnBlack.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      box.style.background = 'black';
    }))

  })
  buttonsContainer.appendChild(btnBlack).classList.add('btn');
}



function rgbColor () {
  const boxs = container.querySelectorAll('.box');
  btnRGB.textContent = 'RGB';
  btnRGB.addEventListener('click', () => {
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      let R = Math.floor(Math.random() * 255)
      let G = Math.floor(Math.random() * 255)
      let B = Math.floor(Math.random() * 255)
      box.style.background = `rgb(${R},${G},${B})`;

    }))

  })
  buttonsContainer.appendChild(btnRGB).classList.add('btn');
}



function reset() {
  const boxs = container.querySelectorAll('.box');
  boxs.forEach(box => box.remove())
};

function resize() {
  btnSize.textContent = 'GRID SIZE';
  btnSize.addEventListener('click', () => {
    let user = prompt('what size do you want your grid to be?');
    if(user === null || user < 1) {
      reset();
      createDivs(16,16);
      blackColor();
      grayColor();
      rgbColor();
    } else if (user >= 100) {
      reset();
      createDivs(100,100);
      blackColor();
      grayColor();
      rgbColor();
    }
    else{
      reset();
      createDivs(user, user);
      blackColor();
      grayColor();
      rgbColor();
    }
  })
  buttonsContainer.appendChild(btnSize).classList.add('btn');
};


function createResetBtn () {
  btnReset.textContent = 'Reset';
  buttonsContainer.appendChild(btnReset).classList.add('btn');
};

function forceReset() {
  btnReset.addEventListener('click', () => {
      reset();
      createDivs(16,16);
      blackColor();
      grayColor();
      rgbColor();
    })
};

resize();
createResetBtn();
createDivs(16,16);
forceReset();
blackColor();
grayColor();
rgbColor();