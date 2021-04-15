const siteUrl = 'https://www.cheatsheet.com/culture/the-best-dog-breed-for-you-based-on-your-zodiac-sign.html/'


fetch(siteUrl) 
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err))