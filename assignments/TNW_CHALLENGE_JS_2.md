# The Next Web \ Javascript #3 \ Difficulty: (8/10)

1. Create 4 div's with a title of your favourite: book, movie, game and song
2. Add one of these data attributes: book, movie, game, song to each one of these divs
3. Create 4 buttons accordingly: book, movie, game, song
4. When you press one of these buttons, only the DIVS containing the corresponding data attribute should be visible.

<details>
  <summary>Hint 1</summary>

	A data attribute can be anything.
	
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
		
</details>

<details>
  <summary>Hint 2</summary>

	You can hide a div with the css rule display:none.
	
	[Classlist](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
		
</details>

<details>
  <summary>Hint 3</summary>

	You can loop through all elements with a specific classname.
	
</details>

<details>
  <summary>Hint 4</summary>

	You can loop through all elements with a specific class.
	You can check the data attribute when you have a specific element.
	
</details>

<details>
  <summary>Hint 5 [pseudo code]</summary>

	const items = document.querySelectorAll(".item");
	for (var i = 0; i < items; i++) {
	  console.log('item: ', items[i]);
	  // check data attribute
	  // is this diffrent then the button i clicked?
	  // hide...
	}
	
</details>


