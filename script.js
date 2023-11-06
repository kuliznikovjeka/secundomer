const btn = document.getElementById('btn');
btn.style.cssText = `margin: 50px 15px 0px 15px; background-color: orange; border: none; border-radius: 4px;
padding: 18px 36px; min-width: 250px; color: white; font-weight: 700; font-size: 24px; box-shadow: 0px 4px 1px #b87e14; cursor: pointer;
`;

const seconds = document.getElementById('seconds');
seconds.style.cssText = `font-weight:500; font-size:18px; margin: 50px 15px 15px 15px;`;

const quantitySeconds = document.getElementById('quantity-seconds');
quantitySeconds.style.cssText = `font-weight:700; font-size:22px;`;


let isClicked = false;
let intervalId;
let second = 1;

const startStopwatch = () => {
	changeTextBtn()
	if (!isClicked) {
		isClicked = true;

		intervalId = setInterval(() => {
			quantitySeconds.textContent = second;
			second = second + 1;
		}, 1000);
	} else if (isClicked) {
		isClicked = false;
		clearInterval(intervalId);
	}

}

function changeTextBtn() {

	switch (btn.textContent) {

		case 'Запустить секундомер':
			btn.textContent = 'Пауза';
			break;

		case 'Пауза':
			btn.textContent = 'Продолжить';
			break;

		case 'Продолжить':
			btn.textContent = 'Пауза';
			break;
	}

}

btn.addEventListener('click', startStopwatch);


