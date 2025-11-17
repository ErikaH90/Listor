const nameInput = document.getElementById("name");
const text = document.getElementById("length");
const button = document.getElementById("button");

button.addEventListener ("click", (event) => {
  event.preventDefault();
  const textLength = nameInput.value.length;
  text.innerText = "Namnet är " + textLength;
});

