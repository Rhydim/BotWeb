var restart = document.querySelector("#button");
var tile = document.querySelectorAll('td');

function clearBoard() {
  for(var i=0; i<9; i++) {
    tile[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);

function change() {
  if( this.textContent === ''){
    this.textContent = 'X';
  } else if(this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}

for(var i=0; i<9; i++) {
  tile[i].addEventListener('click', change);
}
