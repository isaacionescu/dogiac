import { dogs, texts } from './zodiac.js';

class App {
	constructor() {
		this.dogs = dogs;
		this.texts = texts;
		this.$body = document.querySelector('body');
		this.$button = document.querySelector('.button');
		this.$introText = document.querySelector('.intro-text');
		this.$grid =document.querySelector('.grid');
		this.$result = document.querySelector('.result');
		this.$resultTagline = document.querySelector('.result-tagline');
		this.$resultParapgraph = document.querySelector('.result-paragraph');
		this.$image = document.querySelector('.result-image')

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
			button.classList.remove('highlight');
		}
	}

	// Retrieves the HTML element that was clicked, from hidePageContent(), and finds its corresponding ID. Then, it passes this ID further to populatePage()
	generateResult() {
		const signID = this.hidePageContent().dataset.id;
		this.populatePage(signID)
	}

	// Finds out which is the button element that was clicked, then returns it, at the end. Visually fades away the intro and grid sections of the page via animation.
	hidePageContent() {
		if(event.target.matches('.button')) {
			const whichButton = event.target.closest('.button');
			this.$introText.classList.add('invisible');
			this.$grid.classList.add('invisible');
			return whichButton
		} 
	}

	populatePage(id) {
		this.$result.style.margin = "4rem auto";
		setTimeout( () => { 
			this.$introText.parentNode.removeChild(this.$introText);
			this.$grid.parentNode.removeChild(this.$grid);
			this.$result.classList.add('visible');

			const breed = this.dogs[id].breed;
			const sign = this.dogs[id].sign;
			
			// '<br> Woof woof 🐶'
			this.$resultTagline.innerHTML = `You are ${this.addArticle(breed)}!<br>
			Why? Because you're ${this.addArticle(sign)}!<br>(${this.dogs[id].dates})<br><br>`
			this.$resultParapgraph.innerHTML = `${this.texts[id]}`;

			console.log(this.$image)
			console.log(this.dogs[id])
			this.$image.style.backgroundImage = `url('./utils/dog${id}.jpg')`;

		 }, 400)
	}

	// This function prepends the correct indefinite article to the noun: "a" or "an".
	addArticle(word) {
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		const firstLetter = word.substr(0, 1).toLowerCase();
		const startsWithVowel = vowels.includes(firstLetter);
		const article = startsWithVowel ? "an" : "a";
		return `${article} ${word}`;
	}
}

new App();