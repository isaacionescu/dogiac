import { dogs, texts } from './zodiac.js';

class App {
	constructor() {
		this.dogs = dogs;
		this.texts = texts;
		this.$body = document.querySelector('body');
		this.$button = document.querySelector('.button');
		this.$intro = document.querySelector('.intro');
		this.$grid =document.querySelector('.grid');
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

	// Retrieves the HTML element that was clicked from hidePageContent(), and finds its corresponding ID.
	// Then, it passes this ID further to populatePage()
	generateResult() {
		const signID = this.hidePageContent().dataset.id;
		this.populatePage(signID)
	}

	// Finds out which is the button element that was clicked, then returns it, at the end.
	// Visually fades away the intro and grid sections of the page via animation.
	hidePageContent() {
		if(event.target.matches('.button')) {
			const whichButton = event.target.closest('.button');
			this.$intro.classList.add('invisible');
			this.$grid.classList.add('invisible');
			return whichButton
		} 
	}

	// Creates two new variables to hold the quiz results: tagline and paragraph.
	// Assigns the appropriate classes to each. Assigns template text to each.
	// Passes nouns such as the breed or zodiac sign to addArticle().
	// Removes the intro and grid sections from the DOM. Cancels the display:none on the result.
	// And. finally, it populates the DOM with the quiz result.
	populatePage(id) {
		setTimeout( () => { 
			const result1 = document.createElement('div');
			const result2 = document.createElement('div');
			result1.classList.add('result-tagline');
			result2.classList.add('result-paragraph');

			const breed = this.dogs[id].breed;
			const sign = this.dogs[id].sign;

			result1.innerHTML = `You are ${this.addArticle(breed)}!<br> Woof woof 🐶 <br><br>
			Why? Because you're ${this.addArticle(sign)}!<br>(${this.dogs[id].dates})<br><br>`
			result2.innerHTML = `${this.texts[id]}`

			this.$intro.parentNode.removeChild(this.$intro)
			this.$grid.parentNode.removeChild(this.$grid)

			this.$result.classList.add('visible');

			this.$result.appendChild(result1);
			this.$result.appendChild(result2);
		 }, 200)
	}

	// This function simply prepends the appropriate indefinite article to the noun:
	// Either "a" or "an".
	addArticle(word) {
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		const firstLetter = word.substr(0, 1).toLowerCase();
		const startsWithVowel = vowels.includes(firstLetter, 0);
		let a = "a";
		startsWithVowel ? a+= "n" : a = a;
		return `${a} ${word}`
	}
}

new App();