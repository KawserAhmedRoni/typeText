(function ($) {
	("use strict");

	// for another div show the text (1st change here #typing-text)
	// $(document).ready(function () {
	// 	const words = $("#word-data").data("words").split(",");
	// 	let index = 0;
	// 	let letterIndex = 0;
	// 	let direction = 1;
	// 	let currentWord = words[0];
	// 	let interval;

	// 	function typeWriter() {
	// 		const word = words[index];
	// 		if (letterIndex < word.length) {
	// 			$("#typing-text").text(
	// 				$("#typing-text").text() + word.charAt(letterIndex)
	// 			);
	// 			letterIndex++;
	// 		} else {
	// 			clearInterval(interval);
	// 			interval = setInterval(eraseText, 100);
	// 		}
	// 	}

	// 	function eraseText() {
	// 		if (letterIndex >= 0) {
	// 			const text = currentWord.substring(0, letterIndex);
	// 			$("#typing-text").text(text);
	// 			letterIndex--;
	// 		} else {
	// 			clearInterval(interval);
	// 			index = (index + direction) % words.length;
	// 			if (index < 0) index = words.length - 1;
	// 			currentWord = words[index];
	// 			interval = setInterval(typeWriter, 100);
	// 		}
	// 	}

	// 	interval = setInterval(typeWriter, 100);
	// });

	$(document).ready(function () {
		const typingElement = $("#typing-text");
		const words = typingElement.data("words").split(",");
		let index = 0;
		let letterIndex = 0;
		let direction = 1;
		let currentWord = words[0];
		let interval;

		function typeWriter() {
			const word = words[index];
			if (letterIndex < word.length) {
				typingElement.text(typingElement.text() + word.charAt(letterIndex));
				letterIndex++;
			} else {
				clearInterval(interval);
				interval = setInterval(eraseText, 100); // Delay between typing and erasing
			}
		}

		function eraseText() {
			if (letterIndex >= 0) {
				const text = currentWord.substring(0, letterIndex);
				typingElement.text(text);
				letterIndex--;
			} else {
				clearInterval(interval);
				index = (index + direction) % words.length;
				if (index < 0) index = words.length - 1;
				currentWord = words[index];
				interval = setInterval(typeWriter, 100); // Delay before typing next word
			}
		}

		interval = setInterval(typeWriter, 100); // Initial delay before typing starts
	});
})(jQuery);
