// создаем доску с клетками
let board = document.createElement("div");
document.body.appendChild(board);
board.classList.add('board');
var currentElement=false;

// создание 64-х клеток циклом for
for (let i = 1; i < 65; i++) {
	let cell = document.createElement('div'); //локальная переменная cell
	board.appendChild(cell); // добавляем клетки в доску
	cell.classList.add('cell');
}

// глобальная переменная cell
// ищем все элементы на странице у которых есть класс cell
let cell = document.getElementsByClassName('cell'); 

// console.log(cell);

// задаем координаты по осям x y каждой клетке
let x=1;
let y =8;

for (let i=0; i<cell.length; i++) {
	// проверка:если x=9 возвращаем его снова на позицию 1 и при этом перемещаемся по оси y
	if(x>8) {
		x=1;
		y--;
	}
	//каждая ячейчка получает атрибут со значением x=1 и y=8
		cell[i].setAttribute('posX', x);
		cell[i].setAttribute('posY', y);
		x++; //идем по оси x с ходом слева направо 1 шаг пока не дойдем до 8 ячейки 

// закрашивание доски в черно-белый цвет
// если клетка четная и делится на 2 без остатка, то закрашиваем ее в черный цвет, если нет серый
// или если клетка не делится на 2 без остатка
	if ((i%2==0 && y%2==0) || (i%2!=0 && y%2!=0)) {
			cell[i].style.backgroundColor = '#000000';
	} else {
	cell[i].style.backgroundColor = '#f5f5f5';
	}
	
	// ставим коня при клике на клетку
		cell[i].addEventListener( "click" , function() { 
			if(currentElement){
			currentElement.classList.remove('current');
	}
		currentElement=this;
		this.classList.add('current');

		//подсвечиваем возможные ходы 
		x=this.getAttribute('posX');
		y =this.getAttribute('posY');

	});
} // цикл завершен, шахматная доска создана




	
	