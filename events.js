//When any section is clicked the output target text should be "You clicked on the {text of the section} section"
//Adds an event listener to all document elements
document.getElementsByTagName("article")[0].addEventListener("click", function() {
	//Targets the div with the output-target ID and inserts a statement whenever an element is clicked
	document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section.`;
});

//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
//Adds an event listener to the h1 element
document.getElementById("page-title").addEventListener("mouseover", function() {
	document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
})

//When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener("mouseout", function() {
	document.getElementById("output-target").innerHTML = "You left me!!";
})

//When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener("keyup", function() {
	document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;
})

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("addColor");
})

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("hulkSmash");
})

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("trapped");
})

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function() {
	document.getElementById("guinea-pig").classList.toggle("roundedEdge");
})