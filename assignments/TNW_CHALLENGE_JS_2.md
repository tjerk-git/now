# The Next Web \ Javascript #1 \ Difficulty: (2/10)

1. Create a DIV with a red background color inside a HTML page
2. Create a Javascript file and include this in you HTML page
3. Using Javascript, when you click on this DIV, cycle the background color between red, green and blue.

<details>
  <summary>Hint 1</summary>

	With Javascript you can select an HTML element, like a DIV.
	
	https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
		
</details>

<details>
  <summary>Hint 2</summary>

	You can add and remove a CSS class to a DIV
	
	[Classlist](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
		
</details>

<details>
  <summary>Hint 3</summary>

	You can listen to an click event
	
	[on click](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
		
</details>

<details>
  <summary>Hint 4</summary>

	You can store you classes (red, green blue) inside an array.
	
	[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
		
</details>

<details>
  <summary>Hint 5 (pseudo code hint)</summary>

	let = colors ['red', 'green', 'blue'];
	
	i = 0;
	
	on click i++ 
	
	if i > 2, i = 0 (reset the array to 0)
	
	colors[i]
	
	add class colors[i]
	
</details>