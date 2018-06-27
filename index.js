// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;
	// Returns content processed for palindrome testing.
	this.processor = function(string) {
		return string.toLowerCase();
	}
	this.processedContent = function() {
		return this.processor(this.content);
	}
	// Returns true for a palindrome, false otherwise.
	this.palindrome = function() {
		return this.processedContent() === reverse(this.processedContent());
	}
	this.louder = function () {
		return louderContent = this.content.toUpperCase();
	}
}

function TranslatedPhrase(content,translation) {
  this.content = content;
  this.translation = translation;
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
  	return this.processor(this.translation);
  }
}


phrase = new Phrase("Racecar");
console.log(phrase.palindrome());
console.log(phrase.louder());


TranslatedPhrase.prototype = new Phrase();
let frase = new TranslatedPhrase("prout", "lolilol");
console.log(frase.palindrome());