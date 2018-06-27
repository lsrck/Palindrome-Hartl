module.exports = Phrase;


String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;
	// Returns content processed for palindrome testing.

	this.processedContent = function() {
		return this.content.toLowerCase();
	}
	// Returns true for a palindrome, false otherwise.
	this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
	}
}

let napoleonsLament = new Phrase("aurevoir");
console.log(napoleonsLament.palindrome());
console.log(napoleonsLament.isBlank());