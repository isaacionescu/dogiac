import { zodiac, texts } from './zodiac.js';
// console.log(zodiac[1].sign)
// console.log(texts[1])

class App {
	constructor() {
		this.zodiac = zodiac;
		this.texts = texts;
		this.$body = document.querySelector('body');
		this.$button = document.querySelector('.button');
		this.$intro = document.querySelector('.intro');
		this.$table =document.querySelector('.table');
		this.$result = document.querySelector('.result')

		this.addEventListeners();
	}

	addEventListeners() {
		document.body.addEventListener("click", event => {
			this.generateResult(event);
		});

		document.body.addEventListener("mouseover", event => {
			this.highlight()
		})

		document.body.addEventListener("mouseout", event => {
			this.unhighlight()
		})
	}
	

	highlight() {
	// const X = event.clientX; const Y = event.clientY; console.log(X, Y)
		const button = event.target.closest('.button')
		if(event.target.matches('.button')) {
			button.classList.add('highlight')
		} 
	}

	unhighlight() {
		const button = event.target.closest('.button');
		if(event.target.matches('.button')) {
			button.classList.remove('highlight')
			// position.classList.toggle('button')
		}

	}

	generateResult() {
		const signID = this.hideIntro().dataset.id;
		this.populatePage(signID)
	}

	hideIntro() {
		if(event.target.matches('.button')) {
			const whichButton = event.target.closest('.button');
			this.$intro.classList.add('make-invisible');
			this.$table.classList.add('make-invisible');
			return whichButton
		} 
	}

	populatePage(id) {
		setTimeout( () => { 
			const result1 = document.createElement('div');
			const result2 = document.createElement('div');
			result1.classList.add('result-tagline');
			result2.classList.add('result-paragraph');

			result1.innerHTML = `You are a ${this.zodiac[id].breed}!<br> Woof woof 🐶 <br><br>
			You are a ${this.zodiac[id].sign} born in the interval of ${this.zodiac[id].dates}.
			<br><br>`

			result2.innerHTML = `${this.texts[id]}`

			this.$intro.innerHTML = "";
			this.$table.innerHTML = "";
			this.$result.appendChild(result1);
			this.$result.appendChild(result2);
		 }, 400);
	}
}

new App();