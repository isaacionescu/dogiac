import { zodiac, texte } from './zodiac.js';
// console.log(zodiac[1].sign)
// console.log(texte[1])

class App {
	constructor() {
		this.zodiac = zodiac;
		this.texte = texte;

		this.$body = document.querySelector('body');
		this.$button = document.querySelector('.button');
		this.$container = document.querySelector('.container');
		this.$table =document.querySelector('.table');

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
			this.$table.classList.add('makeinvisible');
			// this.$container.classList.add('display-none');
			// this.$table.classList.add('display-none');
			return whichButton
		} 
	}

	populatePage(id) {
		setTimeout( () => { 
			const result = document.createElement('div');
			result.classList.add('container');

			result.innerHTML = 
			`
			You are a ${this.zodiac[id].breed}! Woof woof 🐶 <br><br>
			You are a ${this.zodiac[id].sign} born in the interval of ${this.zodiac[id].dates}.
			<br><br>
			${this.texte[id]}
			`

			this.$container.innerHTML = "";
			this.$container.appendChild(result);

			this.$container.classList.remove('makeinvisible');


			// this.$container.textContent = result;

			console.log(result)
		 }, 400);

	// console.log(`Raspuns: ${this.zodiac[signID].breed}`)
	}

}

new App();