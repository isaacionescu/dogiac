import { zodiac, texte } from './zodiac.js';
// console.log(zodiac[1].sign)
// console.log(texte[1])

class App {
	constructor() {
		this.zodiac = zodiac;
		this.texte = texte;

		this.$body = document.querySelectorAll('body');
		this.$button = document.querySelector('.button');
		this.$container = document.querySelector('.container');

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
		const signID = this.hideContainer().dataset.id;
		this.populatePage(signID)
	}

	hideContainer() {
		if(event.target.matches('.button')) {
			const whichButton = event.target.closest('.button');
			this.$container.classList.add('makeinvisible');
			return whichButton
		} 
	}

	populatePage(id) {
		setTimeout(() => { this.$container.outerHTML = 
			`
			You are a ${this.zodiac[id].breed}! Woof woof 🐶

			As a ${this.zodiac[id].sign} born in the interval of ${this.zodiac[id].dates}
			`
		 }, 900);

	// console.log(`Raspuns: ${this.zodiac[signID].breed}`)
	}

}

new App();